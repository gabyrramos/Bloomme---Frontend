import { FaBirthdayCake } from "react-icons/fa";

function SecondStep() {
  return (
    <>
      <h1 className='assistant-register-title'>Select your personal assistant</h1>
      <div className="assistant-img-container-register">
        <div className="assistant-img magicpattern">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              className="change"
              fill="white"
              d="M37.6,-51.7C49.5,-43.2,60.3,-33.1,68.4,-19.5C76.5,-6,81.9,11.2,76.9,24.5C71.9,37.7,56.5,47.1,41.9,58.1C27.4,69,13.7,81.5,-2.3,84.7C-18.3,87.9,-36.6,81.8,-52.2,71.2C-67.8,60.6,-80.7,45.5,-83.9,28.9C-87,12.3,-80.5,-5.9,-72.5,-21.4C-64.4,-36.9,-54.9,-49.7,-42.6,-58.1C-30.3,-66.5,-15.1,-70.5,-1.1,-68.9C12.9,-67.3,25.8,-60.3,37.6,-51.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <img src="src/assets/RegisterPage/gato.png" alt="" />
        </div>
        <div className="assistant-img assistant-selected magicpattern">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              className="change"
              fill="white"
              d="M40,-64.5C51.5,-62.5,60.4,-51.3,63.1,-39C65.7,-26.7,62.1,-13.3,63.6,0.9C65.2,15.1,71.9,30.3,70.2,44.2C68.5,58.1,58.4,70.9,45.3,73.5C32.2,76.2,16.1,68.9,1.2,66.8C-13.7,64.7,-27.4,67.9,-41.7,65.9C-56,63.9,-70.9,56.7,-78.7,44.9C-86.5,33,-87.2,16.5,-84.4,1.6C-81.7,-13.3,-75.5,-26.6,-67.1,-37.5C-58.7,-48.4,-48.2,-56.8,-36.6,-58.8C-25.1,-60.7,-12.6,-56.2,0.8,-57.6C14.2,-59,28.4,-66.4,40,-64.5Z"
              transform="translate(100 100)"
            />
          </svg>
          <img src="src/assets/RegisterPage/conejo.png" alt="" />
        </div>
      </div>
      <h3 className="headline-assistant-register">It will be your partner during this adventure</h3>
      <div className="choose-assistant-input-button">
        <div className="input-container assistant-form">
          <FaBirthdayCake className="input-icon" />
          <input type="text" placeholder="Name your assistant" />
        </div>

        <button className="register-button-submit" type="submit">
          Next
        </button>
      </div>
      <div className="assistant-register-footer">
        <p>
            You will be able to unlock other pets / assistants later on, don't worry.
        </p>
      </div>
    </>
  );
}

export default SecondStep;
