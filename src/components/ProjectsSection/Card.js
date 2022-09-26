import React from "react";
//Styles
import {
  PortfolioCard,
  ImgContainer,
  CardImg,
  CardT,
  CardP,
  CardTech,
  CardLink,
  CardDescription,
  LinksContainer,
} from "./styles";

const Card = ({
  libraryClass,
  dataValue,
  imgPath,
  title,
  description,
  techStack,
  link,
  linkDescription,
  gitLink,
  gitLinkDescription,
}) => {
  return (
    <PortfolioCard className={libraryClass} data-value={dataValue}>
      <ImgContainer>
        <CardImg src={imgPath} alt="" />
      </ImgContainer>
      <CardT>{title}</CardT>
      <CardDescription>
        <CardP>{description}</CardP>
        <CardTech>{techStack}</CardTech>
      </CardDescription>
      <LinksContainer>
        <CardLink href={link} target="_blank" rel="noreferrer noopener">
          website
        </CardLink>
        <CardLink href={gitLink} target="_blank" rel="noreferrer noopener">
          github
        </CardLink>
      </LinksContainer>
    </PortfolioCard>
  );
};

export default Card;
