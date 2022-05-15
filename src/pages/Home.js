import React, { useState } from "react";
//Components
import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import TechStack from "../components/TechStackSection";
import Portfolio from "../components/ProjectsSection";
import Footer from "../components/Footer/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <IntroSection />
      <AboutSection />
      <TechStack />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
