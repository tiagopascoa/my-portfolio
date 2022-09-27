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
  blue_bg,
}) => {
    console.log('blue_bg: ', blue_bg)
  return (
    <PortfolioCard className={libraryClass} data-value={dataValue}>
      <ImgContainer>
        <CardImg src={imgPath} alt="" />
      </ImgContainer>
      <CardT>{title}</CardT>
      <CardDescription>
        <CardP>{description}</CardP>
        <CardTech><span style={{fontWeight: "bold"}}>Stack: </span>{techStack}</CardTech>
      </CardDescription>
      <LinksContainer>
        <CardLink href={link} target="_blank" rel="noreferrer noopener" blue_bg={blue_bg ? true : false}>
          website
        </CardLink>
        <CardLink href={gitLink} target="_blank" rel="noreferrer noopener" blue_bg={blue_bg ? true : false}>
          github
        </CardLink>
      </LinksContainer>
    </PortfolioCard>
  );
};

export default Card;
