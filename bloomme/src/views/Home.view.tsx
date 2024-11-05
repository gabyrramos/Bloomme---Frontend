// import { useEffect } from 'react';
import { Menu } from '../components/Menu.component';
import avatar from '../assets/avatar.svg';
import { Assistent } from '../components/assistent.component';
import '../styles/Home.style.css';


export const Home = () => {
  return (
    <>
      <div className='container-home'>
        <div className="container-home-menu">
          <Menu title="Ana Maria" avatarUrl={avatar} />
        </div>
        <div className="container-home-sections">
          <div className="container-home-sections-welcome">
            <p className='home-text'>Welcome, Gabriela! Ready to start learning and growing?</p>
          </div>
          <div className="container-home-subsections">
            <div className="home-sections-profile">
              <p>container profile</p>
            </div>
            <div className="home-sections-module">
              <p>container module</p>
            </div>
            <div className="home-sections-day">
              <p>container phrase of the day</p>
            </div>
          </div>
          <div className='container-home-quiz'>
            <div className="container-home-sections-quiz">
              <p> Recommended quizzes</p>
            </div>
            <div className="container-home-sections-assistent">
              <Assistent/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};