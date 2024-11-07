import { useEffect, useState, ChangeEvent } from "react";
import { Menu } from "../components/Menu.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faAngleDown,*/ faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { IStory } from "../models/Search.model";
import avatar from '../assets/avatar.svg';
import '../styles/Search.style.css';

export const Search = () => {
  const [stories, setStories] = useState<IStory[]>([]); // Aquí se guardarán las historias
  const [profileOpen, setProfileOpen] = useState(false);
  const [isChecked, setIsChecked] = useState({
    sexuality: false,
    methods: false,
    menstruation: false,
    ets: false,
    hygiene: false,
  });
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  // Función que maneja el cambio del estado del checkbox
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevStates) => ({
      ...prevStates,
      [e.target.name]: e.target.checked,
    }));
  };
  const handleSearch = () => {
    // Simulación de búsqueda
    const searchResults: IStory[] = [
      { title: "¿A qué edad suele venir la menstruación? " },
      { title: "¿Cuál es la causa de la menstruación?"},
      { title: "¿Cómo se relaciona la ovulación con la menstruación?" },
      { title: "¿Las menstruaciones son regulares cuando una niña empieza a menstruar?"},
      { title: "¿Se puede quedar embarazada una niña en cuanto empieza a tener la menstruación? " },
      { title: "¿Cuánto dura la menstruación?"},
    ];
    setStories(searchResults); //estado con las historias encontradas
  };
  useEffect (() => {
    handleSearch(); // Llama a la función al cargar la página
    // document.body.style.backgroundColor ='#F29FB3';
    return() => {
      // document.body.style.backgroundColor = "";
    };
  }, []);
  return(
    <>
      <div className="container-search">
        <div className="container-search-menu">
          <Menu title="Juanita Lopez" avatarUrl={avatar}/>
        </div>
        <div className="container-search-filters">
          <input type="text" name="text-search" id='text-search' required placeholder='    Search for topics or questions...' />
          {/* <input type="text" name="text-search-filter" id='text-search-filter' placeholder='   Filter' /> */}
          <button type="button" className='button-filter-check'>
            <span className="search-span">Quiz</span> <FontAwesomeIcon icon={faFileAlt} onClick={handleProfileClick} className='filter-search'/>
          </button>
          <hr/>
        </div>
        <div className="container-search-filters-select">
          <div className="checkbox-filter">
            <label>
              <input type="radio" id="sexuality" name="sexuality" value="sexuality" checked={isChecked.sexuality} onChange={handleCheckboxChange} />
              <span>Sexuality</span>
            </label>
            <label>
              <input type="radio" id="methods" name="methods" value="methods" checked={isChecked.methods} onChange={handleCheckboxChange} />
              <span>Contraceptive methods</span>
            </label>
            <label>
              <input type="radio" id="menstruation" name="menstruation" value="menstruation" checked={isChecked.menstruation} onChange={handleCheckboxChange} />
              <span>Menstruation</span>
            </label>
            <label>
              <input type="radio" id="ets" name="ets" value="ets" checked={isChecked.ets} onChange={handleCheckboxChange} />
              <span>ETS</span>
            </label>
            <label>
              <input type="radio" id="hygiene" name="hygiene" value="hygiene" checked={isChecked.hygiene} onChange={handleCheckboxChange} />
              <span>Menstrual Hygiene</span>
            </label>
          </div>
          <div className="container-checkbox-filter-button">
            <div className='container-search-buttons'>
              <button type="button" id='button-filter-check'>
                <span className="search-span">Quiz</span> {/*<FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-search'/> */}
              </button>
              <button type="button" id='button-filter-check'>
                <span className="search-span">Routes</span> {/*<FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-search'/> */}
              </button>
              {profileOpen && (
                <div className="search-dropdown">
                  {/* <ul className="search-ul">
                    <li><Link to="#" onClick={() => console.log("1")}>Know yourself</Link></li>
                    <li><Link to="#" onClick={() => console.log("2")}>Myths</Link></li>
                    <li><Link to="#" onClick={() => console.log("3")}>What would happen if...?</Link></li>
                    <li><Link to="#" onClick={() => console.log("4")}>Diversity and Identity</Link></li>
                    <li><Link to="#" onClick={() => console.log("5")}>Moral Dilemma</Link></li>
                    <li><Link to="#" onClick={() => console.log("6")}>Empathy Test</Link></li>
                  </ul> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='container-search-result'>
          <div className='container-search-result-ind'>
            {stories.map((story, index) =>(
              <div key={index} className="story-card">
                <h3>{story.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};