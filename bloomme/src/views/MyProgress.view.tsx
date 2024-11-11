import { Menu } from '../components/Menu.component';
import { Title } from '../components/Title.component';
import avatar from '../assets/avatar.svg';
import { Assistant } from '../components/Assistant.component';
import rabbit from '../assets/rabbit.png';
import '../styles/MyProgress.style.css';
import { useUserConnection } from '../services/User.service';
// import { useQuizConnection } from '../services/Quiz.service';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

export const MyProgress = () => {
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const {userIdApi} = useUserConnection();
  // const token: string = localStorage.getItem('token') || '';

  // const { userIdApi} = useUserConnection();
  // const { id } = useParams();
  // const { quizApi } = useQuizConnection();

  // const handleQuiz = () => {
  //   console.log(quizApi);
  // };

  // useEffect(() => {
  //   // if (id !== undefined) {
  //     const handlePoint = async() => {
  //       // const userId = parseInt(id ?? '0');
  //       // const getUsers = await userIdApi(userId);
  //       const userPoints = getUsers[0].total_point;
  //       setPoint(userPoints);
  //     };
  //     handlePoint();
  //   }
  // }, []);
  useEffect(()=>{
    const name = localStorage.getItem('username');
    setName(name || '');
  }, []);

  useEffect(() => {
    const handlePoint = async() => {
      const getUsers = await userIdApi();
      const userPoints = getUsers;
      setPoint(userPoints);
    };
    handlePoint();
  },[userIdApi]);
  return (
    <>
      <div className="container-progress">
        <div className="container-progress-menu">
          <Menu/>
        </div>
        <div className="container-progress-title">
          <Title title='My progress'/>
        </div>
        <div className='container-progress-profileStat'>
          <div className="progress-profile-section">
            <img src={avatar} alt="avatar" className="profile-avatar" />
            <p className="progress-profile-name">{name}</p>
            <span className="progress-edit-icon">✎</span>
          </div>
          <div className="progress-stats-section">
            <div className="progress-stat-item">
              <p className="progress-stat-value">{point}</p>
              <p className="progress-stat-label">Total points</p>
            </div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">4</p>
              <p className="progress-stat-label">Quizzes Completes</p>
            </div>
            <div className="vertical-line"></div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">30/90</p>
              <p className="progress-stat-label"> Points available</p>
            </div>
          </div>
        </div>
        <div className="progress-achievements-section">
          <div className="progress-unlocked">
            <p>Unlocked</p>
            <div className="progress-avatars">
              {/* Usa múltiples imágenes de avatar aquí traerlas de la base */}
              <img src={avatar} alt="avatar" />
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="progress-upcoming">
            <p>Upcoming awards</p>
            <div className="progress-avatars">
              <div className="avatar-item">
                <img src={avatar} alt="avatar" className="progress-blocked" />
                <p>100</p>
              </div>
              <div className="avatar-item">
                <img src={avatar} alt="avatar" className="progress-blocked" />
                <p>100</p>
              </div>
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
