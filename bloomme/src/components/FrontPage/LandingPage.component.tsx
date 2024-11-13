// App.tsx
import React from "react";
import LandingHeader from "./LandingHeader.component";
import Hero from "./Hero.component";
import LandingServices from "./LandingServices.component";
import LandingVirtualAssistant from "./LandingVirtualAssistant.component";
import { Footer } from "./Footer.component";
import "../../styles/FrontPage/FrontPage.style.css";

export const LandingPage: React.FC = () => {
  return (
    <div className="landingpage">
      <LandingHeader />
      <Hero />
      <div className="landingpage-container">
        <LandingServices />
        <LandingVirtualAssistant />
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
};
