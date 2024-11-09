// import { useEffect } from 'react';
import { Menu } from '../components/Menu.component';
import avatar from '../assets/avatar.svg';
import { Assistent } from '../components/assistent.component';
import day from '../assets/phrases.svg';
import quiz from '../assets/quiz.svg';
import '../styles/Home.style.css';


export const Home = () => {
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
                <div className="avatar-card1">
                  <img src={avatar} alt="Avatar" className="avatar1"/>
                  <p className="name1">Ana María</p>
                </div>
                <div className="background-selector">
                  <p>Background</p>
                  <div className="home-colors">
                    <span className="home-color white"></span>
                    <span className="home-color yellow selected"></span>
                    <span className="home-color blue"></span>
                    <span className="home-color purple"></span>
                    <span className="home-color green"></span>
                  </div>
                </div>
              </div>
              <div className="home-sections-module">
                <p className="title2">Continue in the module where you left off.</p>
                <div className="modules2">
                  <div className="module2">
                    <div className="circle2">
                      <img src={quiz} alt="Know yourself"/>
                    </div>
                    <p className="module-name2">Know yourself</p>
                  </div>
                  <div className="arrow2">&gt;</div>
                  <div className="module2">
                    <div className="circle2">
                      <img src={quiz} alt="Know yourself"/>
                    </div>
                    <p className="module-name2">Know yourself</p>
                    <button className="continue-button2">Continue</button>
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
            <div className="quiz-cards4">
              <div className="quiz-card4">
                <img src={quiz} alt="Quiz Image"/>
                <p className="quiz-title4">Know yourself</p>
                <button className="quiz-button4">Start Quiz</button>
              </div>
              <div className="quiz-card4">
                <img src={quiz} alt="Quiz Image"/>
                <p className="quiz-title4">Mitos</p>
                <button className="quiz-button4">Start Quiz</button>
              </div>
              <div className="quiz-card4">
                <img src={quiz} alt="Quiz Image"/>
                <p className="quiz-title4">Diversidad e Identidad</p>
                <button className="quiz-button4">Start Quiz</button>
              </div>
            </div>
          </div>
          <div className="container-home-sections-assistent">
            <Assistent/>
          </div>
        </div>
      </div>
    </>
  );
};