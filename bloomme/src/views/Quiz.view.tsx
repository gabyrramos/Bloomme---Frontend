import { Link } from "react-router-dom";
import { Menu } from "../components/Menu.component";
import quiz from '../assets/quiz.svg';
import '../styles/Quiz.style.css';
import { Title } from "../components/Title.component";
import { useEffect, useState } from "react";
import { useQuizConnection } from "../services/Quiz.service";

export const Quiz = () => {
  const [category, setCategory] = useState<{name: string, quiz_id: number}[]>([]);
  const {quizApi} = useQuizConnection();
  useEffect(() => {
    const handleQuiz = async() =>{
      const response = await quizApi();
      console.log("🚀 ~ handleQuiz ~ response:", response);
      setCategory(response);
    };
    handleQuiz();
  },[]);
  return(
    <div className="container-quiz">
      <div className="container-quiz-menu">
        <Menu/>
      </div>
      <div className="container-quiz-title">
        <Title title="Quiz"/>
      </div>
      <div className="container-quiz-star">
        {/* <div className="quiz-star-know"> */}
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



















// import { Link } from "react-router-dom";
// import { Menu } from "../components/Menu.component";
// import avatar from '../assets/avatar.svg';
// import quiz from '../assets/quiz.svg';
// import '../styles/Quiz.style.css';
// import { Title } from "../components/Title.component";
// import { useEffect, useState } from "react";
// import { useQuizConnection } from "../services/Quiz.service";

// export const Quiz = () => {
//   const [category, setCategory] = useState<{name: string}[]>([]);
//   const {quizApi} = useQuizConnection();
//   useEffect(() => {
//     const handleQuiz = async() =>{
//       const response = await quizApi();
//       setCategory(response);
//     };
//     handleQuiz();
//   },[]);
//   return(
//     <div className="container-quiz">
//       <div className="container-quiz-menu">
//         <Menu title="Ana Maria" avatarUrl={avatar} />
//       </div>
//       <div className="container-quiz-title">
//         <Title title="Quiz"/>
//       </div>
//       <div className="container-quiz-star">
//         <div className="quiz-star-know">
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>Know yourself</p>
//           <button className="button-quiz-star"><Link to={`/quizQuestion/Know yourself`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>Myths</p>
//           <button className="button-quiz-star"><Link to={`/quizQuestion/Myths`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>What would happen if...?</p>
//           <button className="button-quiz-if"><Link to={`/quizQuestion/What would happen if...?`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>Diversity and Identity</p>
//           <button className="button-quiz-star"><Link to={`/quizQuestion/Diversity and Identity`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>Moral Dilemma</p>
//           <button className="button-quiz-star"> <Link to={`/quizQuestion/Moral Dilemma`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//         <div className="quiz-star-know">
//           <img src={quiz} alt="quiz background" />
//           <p>Empathy Test</p>
//           <button type="button" className="button-quiz-star"><Link to={`/quizQuestion/Empathy Test`} className="quiz-link"> Start Quiz </Link></button>
//         </div>
//       </div>
//     </div>
//   );
// };