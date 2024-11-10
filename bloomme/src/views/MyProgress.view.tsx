import { Menu } from '../components/Menu.component';
import { Title } from '../components/Title.component';
import avatar from '../assets/avatar.svg';
import { Assistent } from '../components/Assistent.component';
import rabbit from '../assets/rabbit.png';
import '../styles/MyProgress.style.css';

export const MyProgress = () => {
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
              <p className="progress-stat-value">1020</p>
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
          <Assistent text="¿En que puedo ayudarte?" rabbitUrl={rabbit} />
        </div>
      </div>
    </>
  );
};



































// import { Menu } from '../components/Menu.component';
// import avatar from '../assets/avatar.svg';
// import { Title } from '../components/Title.component';
// import { Assistent } from '../components/Assistent.component';
// import '../styles/MyProgress.style.css';

// export const MyProgress = () => {
//   return (
//     <>
//       <div className='container-progress'>
//         <div className="container-progress-menu">
//           <Menu title="Ana Maria" avatarUrl={avatar} />
//         </div>
//         <div className="container-progress-title">
//           <Title title="My Progress"/>
//         </div>
//         <div className='container-progress-all'>
//           <div className='container-progress-avatar'>
//             <div className='container-progress-image'>
//               <img src={avatar} alt="avatar" className='progress-avatar'/>
//               <p className='progress-name'>Ana María</p>
//             </div>
//           </div>
//           <div className='container-progress-points'>
//             <p className='progress-points'>Points: 12345</p>
//             <p className='progress-points'>Unlocked Quizzes: 5</p>
//             <p className='progress-points'>Completed Quizzes: 10</p>
//           </div>
//           <div className='container-progress-unlocked'>
//             <span>Unlocked</span>
//             <div>
//               <img src={avatar} alt="" />
//             </div>
//           </div>
//           <div className='container-progress-upcoming'>
//             <span>Upcoming awards</span>
//             <div>
//               <img src={avatar} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="container-progress-assistent">
//           <Assistent/>
//         </div>
//       </div>
//     </>
//   );
// };