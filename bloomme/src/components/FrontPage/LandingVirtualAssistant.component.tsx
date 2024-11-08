// VirtualAssistant.tsx
import React from 'react';
import '../../styles/FrontPage/LandingVirtualAssistant.style.css';
import servicesarrow from '../../assets/servicesarrow.png';
import rabbitWink from '../../assets/rabbitWink.png';
import bluevector from '../../assets/bluevector.png';
import blueline from '../../assets/blueline.png';
import star from '../../assets/star.png';


const LandingVirtualAssistant: React.FC = () => {
    return (
      <section id="assistant">
        <div className="landingassistant">
          <h2>Your Virtual Assistant</h2>
          <img src={servicesarrow} alt="services arrow" className="servicesarrow" />
          <p>Briefly explain how the virtual assistant can respond to questions about topics like:</p>
          <ul>
            <li><img src={star} alt="star" className="star"/>&nbsp;Sexual health and well-being</li>
            <li><img src={star} alt="star" className="star"/>&nbsp;Managing anxiety and emotions</li>
            <li><img src={star} alt="star" className="star"/>&nbsp;Advice on friendships and relationships</li>
          </ul>
          <h3 className="instructions-title">Instructions on how to use it</h3>
          <div className="quote-container">
            <img src={blueline} alt='blueline' className='blueline'/>
            <p className='quote'>
              <i>To get started, simply type your questions or choose a topic you're interested in. We’re here to provide information and support in a safe, private space.</i>
            </p>
          </div>
        </div>
        <div className="assistant-image-container">
          <img src={rabbitWink} alt="Bunny illustration" className="assistant-image" />
          <img src={bluevector} alt='bluevector' className='bluevector'/>
          <button className="chat-button">Chat with Bloomy</button>
        </div>
      </section>
    );
  };  
  export default LandingVirtualAssistant;