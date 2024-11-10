import { useEffect } from 'react';
import { Menu } from '../components/Menu.component';
import { Assistent } from '../components/Assistent.component';
import avatar from '../assets/avatar.svg';
import rabitt from '../assets/rabbit.png';
import day from '../assets/phrases.svg';
import quiz from '../assets/quiz.svg';
import '../styles/Home.style.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "white"; // color de fondo por defecto
  }, []);
  return (
    <>
      <div className='container-home'>
        <div className="container-home-menu">
          <Menu title="Ana Maria" avatarUrl={avatar} />
        </div>
        <div className="container-home-sections">
          <div className="container-home-welcome">
            <div className="container-home-sections-welcome">
              <p className='home-text'>Welcome, Gabriela! Ready to start learning and growing?</p>
            </div>
            <div className="container-home-subsections">
              <div className="home-sections-profile">
                <div className="home-avatar-card">
                  <img src={avatar} alt="Avatar" className="home-avatar"/>
                  <p className="home-name">Ana María</p>
                </div>
                <div className="background-selector">
                  <p>Background</p>
                  <div className="home-colors">
                    <span className="home-color white"></span>
                    <span className="home-color yellow home-selected"></span>
                    <span className="home-color blue"></span>
                    <span className="home-color purple"></span>
                    <span className="home-color green"></span>
                  </div>
                </div>
              </div>
              <div className="home-sections-module">
                <p className="home-title">Continue in the module where you left off</p>
                <div className="home-modules">
                  <div className="home-module">
                    <div className="home-circle homeOne">
                      <img src={quiz} alt="Know yourself"/>
                    </div>
                    <p className="home-module-name">Know yourself</p>
                  </div>
                  <div className="home-arrow">&gt;</div>
                  <div className="home-module">
                    <div className="home-circle">
                      <img src={quiz} alt="Know yourself"/>
                    </div>
                    <p className="home-module-name">Know yourself</p>
                    <Link to='/paths'><button className="home-continue-button">Continue</button></Link>
                  </div>
                </div>
              </div>
              <div className="home-sections-day">
                <p>Phrase of the day</p>
                <div className='home-sections-day-back'>
                  <img src={day} alt="phrases of day" className='home-phrases'/>
                </div>
              </div>
            </div>
          </div>
          <div className='container-home-quiz'>
            <div className="container-home-sections-quiz">
              <p className='home-quiz'> Recommended quizzes</p>
            </div>
            <div className="home-quiz-cards">
              <div className="home-quiz-card">
                <img src={quiz} alt="Quiz Image"/>
                <p className="home-quiz-title">Know yourself</p>
                <button className="home-quiz-button">Start Quiz</button>
              </div>
              <div className="home-quiz-card">
                <img src={quiz} alt="Quiz Image"/>
                <p className="home-quiz-title">Mitos</p>
                <button className="home-quiz-button">Start Quiz</button>
              </div>
              <div className="home-quiz-card">
                <img src={quiz} alt="Quiz Image"/>
                <p className="home-quiz-title">Diversidad e Identidad</p>
                <button className="home-quiz-button">Start Quiz</button>
              </div>
            </div>
          </div>
          <div className="container-home-sections-assistent">
            <Assistent text='¿En que puedo ayudarte?' rabbitUrl={rabitt}/>
          </div>
        </div>
      </div>
    </>
  );
};