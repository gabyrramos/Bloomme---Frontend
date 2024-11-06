import { Link } from "react-router-dom";
import { Menu } from "../components/Menu.component";
import avatar from '../assets/avatar.svg';
import quiz from '../assets/quiz.svg';
// import diamond from '../assets/diamond.svg';
import '../styles/Quiz.style.css';
import { useEffect } from "react";
import { Title } from "../components/Title.component";

export const Quiz = () => {
  useEffect (() => {
    document.body.style.backgroundColor ='#E6889F';
    return() => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return(
    <div className="container-quiz">
      <div className="container-quiz-menu">
        <Menu title="Ana Maria" avatarUrl={avatar} />
      </div>
      <div className="container-quiz-title">
        <Title title="Quiz"/>
        {/* <h1>Quiz</h1> */}
        {/* <div className="container-quiz-diamond"> */}
        {/* <img src={diamond} alt="diamond" /> */}
        {/* </div> */}
      </div>
      <div className="container-quiz-star">
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Know yourself</p>
          <button className="button-quiz-star">Start Quiz</button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Myths</p>
          <button className="button-quiz-star">Start Quiz</button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>What would happen if...?</p>
          <button className="button-quiz-if">Start Quiz</button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Diversity and Identity</p>
          <button className="button-quiz-star">Start Quiz</button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Moral Dilemma</p>
          <button className="button-quiz-star"> <Link to='/quizQuestion'> Start Quiz </Link></button>
        </div>
        <div className="quiz-star-know">
          <img src={quiz} alt="quiz background" />
          <p>Empathy Test</p>
          <button className="button-quiz-star">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};


/*
PARA EL AVATAR
import React from 'react';
import { MenuProps } from './Menu.types';

const Menu = ({ nombre, avatar }: MenuProps) => {
  const imagenAvatar = `data:image/jpeg;base64,${avatar}`;

  return (
    <div>
      <img src={imagenAvatar} alt={nombre} />
    </div>
  );
};
*/