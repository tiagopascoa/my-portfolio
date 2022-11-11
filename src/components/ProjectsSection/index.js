import React, { useContext } from "react";
import {
  PortfolioContainer,
  Title,
  ProjectsContainer,
  SwiperContainer,
} from "./styles";

//Data
import { projectCards } from "../../configs/staticData";
//Components
import Card from "./Card";
//Context
import { ThemeContext } from "../../context/ThemeContext";
//Swiper
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination]);

const Portfolio = () => {
  const { switchValue } = useContext(ThemeContext);

  return (
    <ProjectsContainer>
      <PortfolioContainer id="projects">
        <Title id="projects">PROJECTS</Title>
        <div
          style={{ maxWidth: "1100px", width: "100%" /* padding: "0 24px" */ }}
        >
          <SwiperContainer blue_bg={switchValue ? true : false}>
            <Swiper
              spaceBetween={20}
              pagination={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                760: {
                  slidesPerView: 2,
                },
              }}
            >
              {projectCards.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card
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
                      blue_bg={switchValue ? true : false}
                      onlyDesktopImg={card.onlyDesktopImg}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SwiperContainer>
        </div>
      </PortfolioContainer>
    </ProjectsContainer>
  );
};

export default Portfolio;
