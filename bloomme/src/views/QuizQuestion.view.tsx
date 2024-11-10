import { useNavigate, useParams } from "react-router-dom";
import { Assistant } from "../components/Assistant.component";
import { Menu } from "../components/Menu.component";
import avatar from '../assets/avatar.svg';
import rabbit from '../assets/rabbit.png';
import '../styles/QuizQuestion.style.css';
import { useEffect, useState } from "react";
import { Title } from "../components/Title.component";
import { Questions } from "../components/Questions.component";
import { Modal } from "../components/Modal.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export const QuizQuestion = () =>{
  const navigate = useNavigate();
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);//QUE PREGUNTA VA EL USARIO
  const [score, setScore] = useState(0);//ACUMULAR LOS PUNTOS
  const [isFinished, setIsFinished] = useState(false);//COMPLETO O NO
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({}); // Respuestas seleccionadas
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswerChange = (answerText: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerText, // Almacena solo la respuesta seleccionada para la pregunta actual
    }));
  };

  const handleNextQuestion = () => {
    // Verificar y sumar los puntos para la pregunta actual
    const selectedAnswer = selectedAnswers[currentQuestion];
    const currentQuestionData = Questions[currentQuestion];
    let questionScore = 0;
    // Calcular los puntos basados en respuestas correctas seleccionadas
    // Sumar puntos si la respuesta seleccionada es correcta
    if (selectedAnswer) {
      const selectedOption = currentQuestionData.options.find(
        (option) => option.answerText === selectedAnswer,
      );
      if (selectedOption && selectedOption.isCorrect) {
        questionScore = 1;
      }
    }
    setScore((prevScore) => prevScore + questionScore);
    // Cambiar a la siguiente pregunta o finalizar el quiz
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      handleOpenModal();
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    navigate('/');
    // navigate('/', { replace: true }); // Reemplaza la ruta actual en el historial
  };
  useEffect (() =>{
    document.body.style.backgroundImage = "linear-gradient(24deg, #fff 50%, #F29FB3 50%)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return(
    <>
      <div className="container-quizQuestion">
        <div className="container-quiz-menu">
          <Menu title="Maria Belen" avatarUrl={avatar}/>
        </div>
        <div className="quizQuestion-titleComponent">
          <Title title={category || "not found"}/>
        </div>
        <div className="container-quizQuestion-star">
          <div className="container-quizQuestion-title">
            <p> {currentQuestion + 1} - {Questions[currentQuestion].title}</p>
          </div>
          <div className="container-quizQuestion-question">
            {Questions[currentQuestion].options.map((answer) => (
              <div key={answer.answerText}>
                <input type="radio" name={`question-${currentQuestion}`} id={answer.answerText}
                  checked={selectedAnswers[currentQuestion] === answer.answerText}
                  onChange={() => handleAnswerChange(answer.answerText)} />
                <label htmlFor={answer.answerText}>{answer.answerText}</label>
              </div>
            ))}
            <div className="container-quizQuestion-button">
              <button className="quizQuestion-button-next" onClick={handleNextQuestion}>Next<FontAwesomeIcon icon={faChevronRight}/></button>
              {isOpen && (
                <Modal>
                  <h1>Result</h1>
                  <p>Total de puntos {score} {isFinished}</p>
                  <button onClick={handleClose} className="modalQuiz-button">Send results</button>
                </Modal>
              )}
              <button className="quizQuestion-button-leave" onClick={handleClose}>Leave <FontAwesomeIcon icon={faArrowRightFromBracket} className="quiz-arrow-arc"/> </button>
            </div>
          </div>
        </div>
      </div>
      <Assistant text="¿Necesitas ayuda con algo?" rabbitUrl={rabbit}/>
    </>
  );
};






















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