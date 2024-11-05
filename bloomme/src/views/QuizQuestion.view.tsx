import { Assistent } from "../components/assistent.component";
import { Menu } from "../components/Menu.component";
import avatar from '../assets/avatar.svg';
import '../styles/QuizQuestion.style.css';
import { useEffect } from "react";
import { Title } from "../components/Title.component";

export const QuizQuestion = () =>{
  useEffect (() =>{
    document.body.style.backgroundColor = "#F29FB3";
    return () => {
      document.body.style.backgroundColor = ""; // Restaurar el color original
    };
  }, []);
  return(
    <>
      <div className="container-quizQuestion">
        <div className="container-quiz-menu">
          <Menu title="Maria Belen" avatarUrl={avatar}/>
        </div>
        <div className="quizQuestion-titleComponent">
          <Title title="Know yourself"/>
        </div>
        <div className="container-quizQuestion-title">
          <p>1 - If you could have any superpower, which one would you pick?</p>
          <div className="container-quizQuestion-star">
            <div>
              <p>imagen</p>
            </div>
            <div className="container-quizQuestion-button">
              <button className="quizQuestion-button-next">Next</button>
              <button className="quizQuestion-button-leave">Leave</button>
            </div>
          </div>
        </div>
        {/* <div className="container-quizQuestion-star">
          <div>
            <p>imagen</p>
          </div>
        </div> */}
      </div>
      <Assistent/>
    </>
  );
};