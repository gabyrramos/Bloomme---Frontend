import { useNavigate, useParams } from "react-router-dom";
import { Assistant } from "../components/Assistant.component";
import { Menu } from "../components/Menu.component";
import rabbit from '../assets/rabbit.png';
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
  const [currentQuestion, setCurrentQuestion] = useState(0);//QUE PREGUNTA VA EL USARIO
  const [score, setScore] = useState(0);//ACUMULAR LOS PUNTOS
  const [isFinished, setIsFinished] = useState(false);//COMPLETO O NO
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({}); // Respuestas seleccionadas
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState([]);
  const {quizApiAI, quizApiAnswers} = useQuizConnection();


  const getModuleQuiz = async(moduleId: number) => {
    try {
      const res = await fetchModuleQuiz(moduleId);
      setQuestion(res.questions);
    } catch (error) {
      console.log({error});
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
      [currentQuestion]: answerText, // Almacena solo la respuesta seleccionada para la pregunta actual
    }));
  };

  const handleNextQuestion = () => {
    // Verificar y sumar los puntos para la pregunta actual
    const selectedAnswer = selectedAnswers[currentQuestion];
    const currentQuestionData = question[currentQuestion];
    let questionScore = 0;
    // Calcular los puntos basados en respuestas correctas seleccionadas
    // Sumar puntos si la respuesta seleccionada es correcta
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
    // Cambiar a la siguiente pregunta o finalizar el quiz
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
    // navigate('/', { replace: true }); // Reemplaza la ruta actual en el historial
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

/*
currentQuestion: el índice de la pregunta actual.
score: la puntuación acumulada del usuario.
isFinished: un indicador de si el quiz ha terminado.
selectedAnswers: un objeto que almacena las respuestas seleccionadas por el usuario.
isOpen: un indicador de si el modal de resultado está abierto.
question: un arreglo de objetos que representa las preguntas del quiz.
El efecto useEffect se utiliza para obtener las preguntas del quiz desde la API cuando el componente se monta.


handleAnswerChange: actualiza la respuesta seleccionada para la pregunta actual.
handleNextQuestion: verifica la respuesta seleccionada, suma puntos si es correcta y cambia a la siguiente pregunta o finaliza el quiz.
handleOpenModal: abre el modal de resultado.
handleClose: cierra el modal de resultado y navega a la página de inicio.


*/





















// import { useNavigate, useParams } from "react-router-dom";
// import { Assistent } from "../components/assistent.component";
// import { Menu } from "../components/Menu.component";
// import avatar from '../assets/avatar.svg';
// import '../styles/QuizQuestion.style.css';
// import { useEffect, useState } from "react";
// import { Title } from "../components/Title.component";
// import { Questions } from "../components/Questions.component";
// import { ModalQuiz } from "../components/ModalQuiz.component";
// import { Modal } from "../components/Modal.component";

// export const QuizQuestion = () =>{
//   const navigate = useNavigate();
//   const { category } = useParams();
//   const [currentQuestion, setCurrentQuestion] = useState(0);//QUE PREGUNTA VA EL USARIO
//   const [score, setScore] = useState(0);//ACUMULAR LOS PUNTOS
//   const [isFinished, setIsFinished] = useState(false);//COMPLETO O NO
//   const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({}); // Respuestas seleccionadas
//   const [isOpen, setIsOpen] = useState(false);

//   const handleAnswerChange = (answerText: string) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestion]: answerText, // Almacena solo la respuesta seleccionada para la pregunta actual
//     }));
//   };

//   const handleNextQuestion = () => {
//     // Verificar y sumar los puntos para la pregunta actual
//     const selectedAnswer = selectedAnswers[currentQuestion];
//     const currentQuestionData = Questions[currentQuestion];
//     let questionScore = 0;
//     // Calcular los puntos basados en respuestas correctas seleccionadas
//     // Sumar puntos si la respuesta seleccionada es correcta
//     if (selectedAnswer) {
//       const selectedOption = currentQuestionData.options.find(
//         (option) => option.answerText === selectedAnswer,
//       );
//       if (selectedOption && selectedOption.isCorrect) {
//         questionScore = 1;
//       }
//     }
//     setScore((prevScore) => prevScore + questionScore);
//     // Cambiar a la siguiente pregunta o finalizar el quiz
//     if (currentQuestion < Questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setIsFinished(true);
//       handleOpenModal();
//     }
//   };

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };
//   const handleClose = () => {
//     navigate('/', { replace: true }); // Reemplaza la ruta actual en el historial
//   };
//   useEffect (() =>{
//     document.body.style.backgroundImage = "linear-gradient(24deg, #fff 50%, #F29FB3 50%)";
//     return () => {
//       document.body.style.backgroundColor = "";
//     };
//   }, []);
//   return(
//     <>
//       <div className="container-quizQuestion">
//         <div className="container-quiz-menu">
//           <Menu title="Maria Belen" avatarUrl={avatar}/>
//         </div>
//         <div className="quizQuestion-titleComponent">
//           <Title title={category || "not found"}/>
//         </div>
//         <div className="container-quizQuestion-star">
//           <div className="container-quizQuestion-title">
//             <p> {currentQuestion + 1} - {Questions[currentQuestion].title}</p>
//           </div>
//           <div className="container-quizQuestion-question">
//             {Questions[currentQuestion].options.map((answer) => (
//               <div key={answer.answerText}>
//                 <input type="radio" name={`question-${currentQuestion}`} id={answer.answerText}
//                   checked={selectedAnswers[currentQuestion] === answer.answerText}
//                   onChange={() => handleAnswerChange(answer.answerText)} />
//                 <label htmlFor={answer.answerText}>{answer.answerText}</label>
//               </div>
//             ))}
//             <div className="container-quizQuestion-button">
//               <button className="quizQuestion-button-next" onClick={handleNextQuestion}>Next</button>
//               <ModalQuiz isOpen={isOpen}>
//                 <h1>Result</h1>
//                 <p>Total de puntos {score} {isFinished}</p>
//               </ModalQuiz>
//               <button className="quizQuestion-button-leave" onClick={handleClose}>Leave</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Assistent/>
//     </>
//   );
// };