import { useNavigate, useParams } from "react-router-dom";
import { Assistant } from "../components/Assistant.component";
import '../styles/QuizQuestion.style.css';
import { useState, useEffect } from "react";
import { Title } from "../components/Title.component";
import { Modal } from "../components/Modal.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { fetchModuleQuiz, sendApiResult, useQuizConnection } from "../services/Quiz.service";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";
import UiLoader from "../components/uiLoader.component";

export const QuizQuestion = () =>{
  const navigate = useNavigate();
  const { category, categoryId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState([]);
  const {quizApiAI} = useQuizConnection();

  const getModuleQuiz = async(moduleId: number) => {
    try {
      const res = await fetchModuleQuiz(moduleId);
      setQuestion(res.questions);
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error}`);
    }
  };

  const handleQuizAI = async() => {
    const id = parseInt(categoryId || "");
    const response = await quizApiAI(id);
    setQuestion(response.questions);
  };

  useEffect(() =>{
    const pathName = window.location.pathname;
    const isModule = pathName.startsWith('/quizQuestionModule/');

    if (isModule) {
      getModuleQuiz(parseInt(categoryId || ""));
    } else {
      handleQuizAI();
    }

  },[categoryId]);

  const handleAnswerChange = (answerText: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerText,
    }));
  };

  const handleNextQuestion = () => {
    const selectedAnswer = selectedAnswers[currentQuestion];
    const currentQuestionData = question[currentQuestion];
    let questionScore = 0;
    if (selectedAnswer) {
      const selectedOption = currentQuestionData.options.find(
        (option) => option.option_text === selectedAnswer,
      );
      if (selectedOption && selectedOption.is_correct) {
        questionScore = 100;
      }
    }
    const totalScore = score + questionScore
    setScore(totalScore);
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      sendResult(totalScore);
      handleOpenModal();
    }
  };

  const sendResult = async(result: number) => {
    try {
      const res = await sendApiResult(categoryId, result);
      console.log({res});
    } catch (error) {
      console.log({error});
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    navigate('/home');
  };
  return(
    <>
      <div className="container-quizQuestion h-screen">
        <div className="container-quiz-menu">
          <SafeAreaHeader />
        </div>
        <div className="quizQuestion-titleComponent">
          <Title title={category || "not found"}/>
        </div>
        <div className="container-quizQuestion-star bg-[#fff2f2]">
          {question.length > 0 ? (
            <>
              <div className="container-quizQuestion-title">
                <p> {currentQuestion + 1} - {question[currentQuestion].question_text}</p>
              </div>
              <div className="container-quizQuestion-question flex justify-center gap-4">
                {question.length > 0 && question[currentQuestion].options.map((answer) => (
                  <div key={answer.option_text} className="flex items-center">
                    <input type="radio" name={`question-${currentQuestion}`} id={answer.option_text}
                      checked={selectedAnswers[currentQuestion] === answer.option_text}
                      onChange={() => handleAnswerChange(answer.option_text)} className="quiz-radio"/>
                    <label htmlFor={answer.option_text}>{answer.option_text}</label>
                  </div>
                ))}
                <div className="container-quizQuestion-button">
                  <button className="quizQuestion-button-next flex justify-center items-center p-4 gap-4 border border-gray-300 shadow-lg" onClick={handleNextQuestion}>Next<FontAwesomeIcon icon={faChevronRight}/></button>
                  {isOpen && (
                    <Modal>
                      <h1>Result</h1>
                      <p>Total {score} {isFinished}</p>
                      <button onClick={handleClose} className="modalQuiz-button">Send results</button>
                    </Modal>
                  )}
                  <button className="quizQuestion-button-leave flex justify-center items-center p-4 gap-4 border border-gray-300 shadow-lg" onClick={handleClose}>Leave <FontAwesomeIcon icon={faArrowRightFromBracket} className="quiz-arrow-arc"/> </button>
                </div>
              </div>
            </>
          ):(
            <div className="flex w-full h-full items-center justify-center">
              <UiLoader />
            </div>
          )}
        </div>
      </div>
      <Assistant text="How can I help you?"/>
    </>
  );
};