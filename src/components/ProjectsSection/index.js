import React, { useContext } from "react";
//Styles
import "react-alice-carousel/lib/alice-carousel.css";
import "./CarouselStyles.css";
import {
  PortfolioContainer,
  Title,
  ProjectsContainer,
  CarouselDotsInactive,
  CarouselDotsActive,
} from "./styles";
//Tools
import AliceCarousel from "react-alice-carousel";
//Data
import { projectCards } from "../../configs/staticData";
//Components
import Card from "./Card";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const Portfolio = () => {
  const { switchValue } = useContext(ThemeContext);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };
  const items = projectCards.map((card, index) => {
    return (
      <Card
        key={index}
        libraryClass={card.libraryClass}
        dataValue={card.dataValue}
        imgPath={card.imgPath}
        title={card.title}
        description={card.description}
        techStack={card.techStack}
        link={card.link}
        linkDescription={card.linkDescription}
        gitLink={card.gitLink}
        gitLinkDescription={card.gitLinkDescription}
      />
    );
  });

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <CarouselDotsActive blue_bg={switchValue ? +true : +false} />
    ) : (
      <CarouselDotsInactive blue_bg={switchValue ? +true : +false} />
    );
  };

  return (
    <ProjectsContainer>
      <PortfolioContainer id="projects">
        <Title id="projects">PROJECTS</Title>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          renderDotsItem={renderDotsItem}
        />
      </PortfolioContainer>
    </ProjectsContainer>
  );
};

export default Portfolio;
