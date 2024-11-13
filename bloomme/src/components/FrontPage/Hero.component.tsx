// Hero.tsx
import React from "react";
import "../../styles/FrontPage/Hero.style.css";
import landingEllipse from "../../assets/landingEllipse.png";
import landingHero from "../../assets/landingHero.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className='max-w-[40rem]'>Bloom into Confidence, Bloom into You.</h1>
      <p>
        Empowering young girls to understand their bodies and minds, you can
        build confidence and gain valuable knowledge in a safe, supportive
        space. We believe that learning about oneself should be fun, empowering,
        and something to celebrate!
      </p>
      <div className="hero-images">
        <img src={landingEllipse} alt="Elipse" className="hero-ellipse" />
        <img src={landingHero} alt="Character" className="hero-character" />
      </div>
    </section>
  );
};

export default Hero;
