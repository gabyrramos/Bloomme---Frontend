import { Menu } from '../components/Menu.component';
import { Title } from '../components/Title.component';
import { Assistant } from '../components/Assistant.component';
import rabbit from '../assets/rabbit.png';
import '../styles/MyProgress.style.css';
import { useUserConnection } from '../services/User.service';
// import { useQuizConnection } from '../services/Quiz.service';
import { useEffect, useState } from 'react';
import { useRewardConnection } from '../services/Reward.service';

export const MyProgress = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  // const {rewardApi} = useRewardConnection('avatar');
  // const [rewards, setRewards] = useState([]);
  const [point, setPoint] = useState(0);
  const [quiz, setQuiz] = useState(0);
  const [available, setAvailable] = useState(0);
  const {userIdApi, userApiPoint} = useUserConnection();
  useEffect(()=>{
    // const token: string = localStorage.getItem('token') || '';
    const name = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');
    setName(name || '');
    setAvatar(avatar || '');
  }, []);

  useEffect(() => {
    const handleUserData = async() => {
      const getUsers = await userIdApi();
      const getUserPoint = await userApiPoint();
      const userPoints = getUsers.total_point;
      const userQuiz = getUsers.quiz_completed;
      const userAvailable = getUserPoint;

      setPoint(userPoints);
      setQuiz(userQuiz);
      setAvailable(userAvailable);
    };
    handleUserData();
  },[]);
  // useEffect(() => {
  //   const fetchRewards = async() => {
  //     try {
  //       const data = await rewardApi();
  //       console.log(" ~ fetchRewards ~ data:", data)
  //       setRewards(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchRewards();
  // }, []);
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
              <p className="progress-stat-value">{quiz}</p>
              <p className="progress-stat-label">Quizzes Completes</p>
            </div>
            <div className="vertical-line"></div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">{available}</p>
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
              {/* {rewards.map((reward, index) => (
                <img src={reward.image} alt={reward.name} key={index} />
              ))} */}
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
          <Assistant text="How can I help you?" />
        </div>
      </div>
    </>
  );
};
