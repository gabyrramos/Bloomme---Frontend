import { Menu } from '../components/Menu.component';
import { Title } from '../components/Title.component';
import avatar from '../assets/avatar.svg';
import { Assistant } from '../components/Assistant.component';
import rabbit from '../assets/rabbit.png';
import '../styles/MyProgress.style.css';
import { useUserConnection } from '../services/User.service';
// import { useQuizConnection } from '../services/Quiz.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MyProgress = () => {
  const [point, setPoint] = useState(0);
  const { userIdApi} = useUserConnection();
  const { id } = useParams();
  // const { quizApi } = useQuizConnection();

  // const handleQuiz = () => {
  //   console.log(quizApi);
  // };

  useEffect(() => {
    if (id !== undefined) {
      const handlePoint = async() => {
        const userId = parseInt(id ?? '0');
        const getUsers = await userIdApi(userId);
        const userPoints = getUsers.total_point;
        setPoint(userPoints);
      };
      handlePoint();
    }
  }, [userIdApi, id]);
  return (
    <>
      <div className="container-progress">
        <div className="container-progress-menu">
          <Menu title="Ana María" avatarUrl={avatar} />
        </div>
        <div className="container-progress-title">
          <Title title='My progress'/>
        </div>
        <div className='container-progress-profileStat'>
          <div className="progress-profile-section">
            <img src={avatar} alt="avatar" className="profile-avatar" />
            <p className="progress-profile-name">Ana María</p>
            <span className="progress-edit-icon">✎</span>
          </div>
          <div className="progress-stats-section">
            <div className="progress-stat-item">
              <p className="progress-stat-value">{point}</p>
              <p className="progress-stat-label">Points</p>
            </div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">4/100</p>
              <p className="progress-stat-label">Quizzes Complete</p>
            </div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">30/90</p>
              <p className="progress-stat-label">Paths Complete</p>
            </div>
          </div>
        </div>
        <div className="progress-achievements-section">
          <div className="progress-unlocked">
            <p>Unlocked</p>
            <div className="progress-avatars">
              {/* Usa múltiples imágenes de avatar aquí */}
              <img src={avatar} alt="avatar" />
              <img src={avatar} alt="avatar" />
              {/* Agrega más imágenes según sea necesario */}
            </div>
          </div>
          <div className="progress-upcoming">
            <p>Upcoming awards</p>
            <div className="progress-avatars">
              <img src={avatar} alt="avatar" className="progress-blocked" />
              <img src={avatar} alt="avatar" className="progress-blocked" />
              {/* Agrega más imágenes bloqueadas según sea necesario */}
            </div>
          </div>
        </div>
        <div className="progress-assistant-section">
          <Assistant text="¿En que puedo ayudarte?" rabbitUrl={rabbit} />
        </div>
      </div>
    </>
  );
};
