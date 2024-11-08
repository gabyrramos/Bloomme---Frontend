// Services.tsx
import React from "react";
import "../../styles/FrontPage/LandingServices.style.css";
import servicesarrow from "../../assets/servicesarrow.png";

const ServiceItem: React.FC<{
  title: string;
  description: string;
  color: string;
}> = ({ title, description, color }) => (
  <div className="landingservice-item" style={{ backgroundColor: color }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const LandingServices: React.FC = () => {
  return (
    <section className="landingservices" id="services">

      <h2>Our Services</h2>
      <img src={servicesarrow} alt="services arrow" className="servicesarrow" />
      <div className="services-list">
        <ServiceItem
          title="Quiz"
          description="Discover more about your body, mind, and well-being with quizzes designed to make learning fun."
          color="#fcc0cb"
        />
        <ServiceItem
          title="Progress"
          description="Track your journey, earn points, and see your growth. The more you engage, the closer you get to unlocking cool prizes!"
          color="#f0d1a5"
        />
        <ServiceItem
          title="Routes"
          description="Choose your path—whether it's mental health, sexual health, or self-care—and explore resources tailored just for you."
          color="#b5eab7"
        />
        <ServiceItem
          title="Safe Area"
          description="Need a moment to breathe? Our Safe Area has exercises and tools to help you cope with emotions in a supportive space."
          color="#cadbf3"
        />
      </div>
    </section>
  );
};

export default LandingServices;
