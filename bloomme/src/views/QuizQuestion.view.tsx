import { Assistent } from "../components/assistent.component";
import { Menu } from "../components/Menu.component";
import '../styles/QuizQuestion.style.css';

export const QuizQuestion = () =>{
  return(
    <>
      <div className="container-quizQuestion">
        <div className="container-quiz-menu">
          <Menu />
        </div>
        <div className="container-quizQuestion-title">
          <h1>TITULO DEL QUIZ SELECCIONADO</h1>
          <div className="container-quizQuestion-star">
            <div>
              <p>imagen</p>
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