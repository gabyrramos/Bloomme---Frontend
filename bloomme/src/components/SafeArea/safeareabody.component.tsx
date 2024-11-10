import React from 'react';
import sadbunny from "../../assets/safearea/sadbunny.png";
import '../../styles/SafeArea/safeareabody.style.css';


const SafeAreaBody: React.FC = () => {
  return (
    <div className="safehome-container">
      {/* <div className="safehome-divider">
        <img src={safearealine} alt="Divider" />
      </div>  */}
      <div className="safehome-left">
        <img src={sadbunny} alt="Sad Bunny" />
      </div>
      <div className="safehome-right">
      <h2 className="safehome-question">How do you feel now?</h2>
        <div className="safehome-categories">
          <div className="safehome-category-column">
            <button className="safehome-category-btn">Angry</button>
            <button className="safehome-category-btn">Anxious</button>
            <button className="safehome-category-btn">Sad</button>
          </div>
          <div className="safehome-category-column">
            <button className="safehome-category-btn">Worried</button>
            <button className="safehome-category-btn">Overwhelmed</button>
            <button className="safehome-category-btn">Tired</button>
          </div>
        </div>
      </div>
      <button className="safehome-emergency-btn">Emergency Button</button>
    </div>
  );
};

export default SafeAreaBody;
