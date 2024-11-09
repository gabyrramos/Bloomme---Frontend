import { Menu } from '../components/Menu.component';
import avatar from '../assets/avatar.svg';
import { Title } from '../components/Title.component';
import { Assistent } from '../components/assistent.component';
import '../styles/MyProgress.style.css';

export const MyProgress = () => {
  return (
    <>
      <div className='container-progress'>
        <div className="container-progress-menu">
          <Menu title="Ana Maria" avatarUrl={avatar} />
        </div>
        <div className="container-progress-title">
          <Title title="My Progress"/>
        </div>
        <div className='container-progress-all'>
          <div className='container-progress-avatar'>
            <div className='container-progress-image'>
              <img src={avatar} alt="avatar" className='progress-avatar'/>
              <p className='progress-name'>Ana María</p>
            </div>
          </div>
          <div className='container-progress-points'>
            <p className='progress-points'>Points: 12345</p>
            <p className='progress-points'>Unlocked Quizzes: 5</p>
            <p className='progress-points'>Completed Quizzes: 10</p>
          </div>
          <div className='container-progress-unlocked'>
            <span>Unlocked</span>
            <div>
              <img src={avatar} alt="" />
            </div>
          </div>
          <div className='container-progress-upcoming'>
            <span>Upcoming awards</span>
            <div>
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="container-progress-assistent">
          <Assistent/>
        </div>
      </div>
    </>
  );
};