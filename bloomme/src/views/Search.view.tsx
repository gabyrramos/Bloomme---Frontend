import { useState, ChangeEvent } from "react";
import { Menu } from "../components/Menu.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faAngleDown,*/ faFilter } from '@fortawesome/free-solid-svg-icons';
import { IStory } from "../models/Search.model";
import { useSearchConnection } from "../services/Search.service";
import avatar from '../assets/avatar.svg';
import rabitt from '../assets/rabbit.png';
import '../styles/Search.style.css';
import { Assistant } from "../components/Assistant.component";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";

export const Search = () => {
  const [modules, setModules] = useState<IStory[]>([]); // Aquí se guardarán
  const [ title, setTitle] = useState('');
  const {searchApi} = useSearchConnection();
  // const [profileOpen, setProfileOpen] = useState(false);
  const [isChecked, setIsChecked] = useState({
    sexuality: false,
    methods: false,
    menstruation: false,
    ets: false,
    hygiene: false,
  });
  // const handleProfileClick = () => {
  //   setProfileOpen(!profileOpen);
  // };

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
      { title: "¿A qué edad suele venir la menstruación?" },
      { title: "¿Cuál es la causa de la menstruación?"},
      { title: "¿Cómo se relaciona la ovulación con la menstruación?" },
      { title: "¿Las menstruaciones son regulares cuando una niña empieza a menstruar?"},
      { title: "¿Se puede quedar embarazada una niña en cuanto empieza a tener la menstruación? " },
      { title: "¿Cuánto dura la menstruación?"},
    ];
    // const searchResults = await searchApi(title);
    setModules(searchResults); //estado con las historias encontradas
  };
  return(
    <>
      <div className="container-search">
        <div className="container-search-menu">
          {/* <Menu title="Juanita Lopez" avatarUrl={avatar}/> */}
          <SafeAreaHeader />
        </div>
        <div className="container-search-filters">
          <input type="text" name="text-search" id='text-search' required onChange={(e) => setTitle(e.target.value)} placeholder='    Search for topics or questions...' />
          {/* <input type="text" name="text-search-filter" id='text-search-filter' placeholder='   Filter' /> */}
          <button type="button" className='button-filter-check' title={title} onClick={handleSearch}>
            <FontAwesomeIcon icon={faFilter} className='filter-search'/> <span className="search-span">Filter</span>
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
            {/* <div className='container-search-buttons'> */}
            {/* <button type="button" id='button-filter-check'> */}
            {/* <span className="search-span">Quiz</span> <FontAwesomeIcon icon={faAngleDown} onClick={handleProfileClick} className='arrow-search'/> */}
            {/* </button> */}
            {/* <button type="button" id='button-filter-check'> */}
            {/* <span className="search-span">Routes</span>  */}
            {/* </button> */}
            {/* {profileOpen && (
                <div className="search-dropdown">
                  <ul className="search-ul">
                    <li><Link to="#" onClick={() => console.log("1")}>Know yourself</Link></li>
                  </ul>
                </div>
              )} */}
            {/* </div> */}
          </div>
        </div>
        <div className='container-search-result'>
          <div className='container-search-result-ind'>
            {modules.map((path, index) =>(
              <div key={index} className="search-card">
                <h3>{path.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="container-assistent">
          <Assistant text="How can I help you?"/>
        </div>
      </div>
    </>
  );
};