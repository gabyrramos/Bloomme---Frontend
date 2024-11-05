import { Link } from "react-router-dom";
import { Menu } from "../components/Menu.component";
import { useStars } from "../hooks/UseStars.hook";
import avatar from '../assets/avatar.svg';
import '../styles/Quiz.style.css';

export const Quiz = () => {
  useStars();
  //TENGO QUE ADAPTAR AL DAR CLIC DEBE APARECER EL TITULO SELECCIONADO
  return(
    <div className="container-quiz">
      <div className="container-quiz-menu">
        <Menu title="Ana Maria" avatarUrl={avatar} />
      </div>
      <div className="container-quiz-title">
        <h1>Quiz</h1>
      </div>
      <div className="container-quiz-star">
        <div>
          <p>Conoce tu cuerpo</p>
          <button className="button-quiz-star">comenzar quiz</button>
        </div>
        <div>
          <p>Conoce tu cuerpo</p>
          <button className="button-quiz-star">comenzar quiz</button>
        </div>
        <div>
          <p>Conoce tu cuerpo</p>
          <button className="button-quiz-star">comenzar quiz</button>
        </div>
        <div>
          <p>Conoce tu cuerpo</p>
          <button className="button-quiz-star"> <Link to='/quizQuestion'> comenzar quiz </Link></button>
        </div>
        <div>
          <p>Conoce tu cuerpo</p>
          <button className="button-quiz-star">comenzar quiz</button>
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