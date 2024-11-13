import { Link } from "react-router-dom";
import quiz from '../assets/quiz.svg';
import '../styles/Quiz.style.css';
import { Title } from "../components/Title.component";
import { useEffect, useState } from "react";
import { useQuizConnection } from "../services/Quiz.service";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";

export const Quiz = () => {
  const [category, setCategory] = useState<{name: string, quiz_id: number}[]>([]);
  const {quizApi} = useQuizConnection();
  useEffect(() => {
    const handleQuiz = async() =>{
      const response = await quizApi();
      setCategory(response);
    };
    handleQuiz();
  },[]);
  return(
    <div className="container-quiz">
      <div className="container-quiz-menu">
        <SafeAreaHeader />
      </div>
      <div className="container-quiz-title">
        <Title title="Quiz"/>
      </div>
      <div className="container-quiz-star">
        {category.map((item)=>(
          <div key={item.name} className="quiz-star-know">
            <img src={quiz} alt="quiz background" />
            <p>{item.name}</p>
            <button className={`button-quiz-star ${item.name === 'What would happen if...?' ? 'button-quiz-if' : ''}`}>
              <Link to={`/quizQuestion/${item.name}/${item.quiz_id}`} className="quiz-link"> Start Quiz </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};