import { useEffect, useState } from "react";
import { Menu } from "../components/Menu.component";
import { Assistant } from "../components/Assistant.component";
import rabitt from "../assets/rabbit.png";
// import day from '../assets/phrases.svg';
import quiz from "../assets/quiz.svg";
import "../styles/Home.style.css";
import { Link } from "react-router-dom";
import { useRewardConnection } from "../services/Reward.service";
import { useQuizConnection } from "../services/Quiz.service";
// import ProfileModal from '../components/SafeArea/ProfileModal.component';
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";
const quotesImages = import.meta.glob("../assets/BloommeQuotes/*.png", {
  eager: true,
});

export const Home = () => {
  // const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);//BORRAR ES PARA USAR EL MODAL DE GABI
  const [category, setCategory] = useState<{ name: string; quiz_id: number }[]>(
    [],
  );
  const { quizApi } = useQuizConnection();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState([]);
  const [randomImage, setRandomImage] = useState("");
  const { rewardApi } = useRewardConnection();
  // const handleOpenProfileModal = () => {//BORRAR ES PARA USAR EL MODAL DE GABI
  //   setIsProfileModalOpen(true);
  // };

  // const handleCloseProfileModal = () => {//BORRAR ES PARA USAR EL MODAL DE GABI
  //   setIsProfileModalOpen(false);
  // };
  // Establece una imagen por defecto y recupera la selección guardada en localStorage
  const [selectedColor, setSelectedColor] = useState({
    color: "background",
    backgroundColor: localStorage.getItem("background") || "pink)", // Ruta de la imagen por defecto
  });
  const handleImageSelect = (imageUrl) => {
    console.log({imageUrl})
    const selectedBackground = {
      color: "background",
      background: `url(${imageUrl})`,
    };
    setSelectedColor(selectedBackground);
    localStorage.setItem("background  ", `${imageUrl}`); // Guarda la selección en localStorage
  };

  useEffect(() => {
    const handleQuiz = async () => {
      const response = await quizApi();
      setCategory(response);
    };
    handleQuiz();
  }, []);
  // useEffect(() => {
  //   const handleReward = async() =>{
  //     const response = await rewardApiBackground();
  //     console.log("🚀 ~ handleReward ~ response:", response);
  //     setBackground(response);
  //   };
  //   handleReward();
  // },[]);
  useEffect(() => {
    const handleBackground = async () => {
      try {
        const response = await rewardApi("background");
        setBackground(response.rewards);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Error inesperado";
        throw new Error(errorMessage);
      }
    };
    handleBackground();
  }, []);
  useEffect(() => {
    const name = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");
    // const background = localStorage.getItem('background');
    setName(name || "");
    setAvatar(avatar || "");
    // setBackground(background || '');
  }, []);
  useEffect(() => {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "white"; // color de fondo por defecto
  }, []);
  useEffect(() => {
    // Obtener todas las rutas de las imágenes
    const imagePaths = Object.values(quotesImages).map(
      (module) => module.default
    );
    // Seleccionar una imagen aleatoria
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    setRandomImage(imagePaths[randomIndex]);
  }, []); // Esto se ejecutará solo una vez al cargar la página
  return (
    <>
      <div className="container-home">
        <div className="container-home-menu">
          {/* <SafeAreaHeader /> */}
          <SafeAreaHeader />
        </div>
        <div className="container-home-sections">
          {/* Botón para abrir el modal */}
          {/* <button onClick={handleOpenProfileModal}>Open Profile</button> */}
          {/* Modal con los datos del usuario */}
          {/* <ProfileModal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} /> */}
          <div className="container-home-welcome bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0]">
            <div className="container-home-sections-welcome">
              <p className="home-text">
                Welcome, {name}! Ready to start learning and growing?
              </p>
            </div>
            <div className="container-home-subsections">
              <div className="home-sections-profile">
                <div className="bg-white rounded-lg">
                  <div
                    className="home-avatar-card"
                    style={{ backgroundImage: selectedColor?.background, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '10px', position: 'relative', height: '175px', width: '180px'}}
                  >
                    <img src={avatar} alt="Avatar" className="home-avatar" />
                    <p className="home-name absolute -bottom-4">{name}</p>
                  </div>
                </div>
                <div className="background-selector">
                  <p>Background</p>
                  <div className="home-colors gap-0 bg-white rounded-xl max-w-[150px] overflow-x-auto">
                    {background.map((bg, index) => (
                      <span
                        key={index}
                        onClick={() => handleImageSelect(bg.image)}
                        style={{
                          backgroundImage: `url(${bg.image})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: 'no-repeat',
                          width: '72px',
                          height: '72px',
                          flexShrink: 0,
                        }}
                        className={`home-color ${
                          selectedColor.backgroundColor === `url(${bg.image})`
                            ? "selected"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="home-sections-module">
                <p className="home-title">
                  Continue in the module where you left off
                </p>
                <div className="home-modules">
                  <div className="home-module">
                    <div className="home-circle">
                      <img src={quiz} alt="Know yourself" />
                    </div>
                    <Link to="/paths">
                      <button className="home-continue-button">Continue</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="home-sections-day">
                <p>Phrase of the day</p>
                <div className="home-sections-day-back">
                  {/* Mostrar la imagen aleatoria seleccionada */}
                  {randomImage && (
                    <img
                      src={randomImage}
                      alt="phrase of the day"
                      className="home-phrases"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container-home-quiz bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0]">
            <div className="container-home-sections-quiz">
              <p className="home-quiz"> Recommended quizzes</p>
            </div>
            <div className="home-quiz-cards">
              {category.slice(0, 3).map((item) => (
                <div key={item.name} className="home-quiz-card">
                  <img src={quiz} alt="quiz background" />
                  <p className="home-quiz-title">{item.name}</p>
                  <button className={`home-quiz-button`}>
                    <Link
                      to={`/quizQuestion/${item.name}/${item.quiz_id}`}
                      className="quiz-link"
                    >
                      {" "}
                      Start Quiz{" "}
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="container-home-sections-assistent">
            <Assistant text='How can I help you?'/>
          </div>
        </div>
      </div>
    </>
  );
};

/*
import { useEffect } from 'react';
import { Menu } from '../components/Menu.component';
import { Assistant } from '../components/Assistant.component';
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
                    <p className="home-module-name"> Taking Care of My Body</p>
                  </div>
                  <div className="home-arrow">&gt;</div>
                  <div className="home-module">
                    <div className="home-circle">
                      <img src={quiz} alt="Know yourself"/>
                    </div>
                    <p className="home-module-name">Knowing My Boundaries</p>
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
            <Assistant text='¿En que puedo ayudarte?' rabbitUrl={rabitt}/>
          </div>
        </div>
      </div>
    </>
  );
};


*/
