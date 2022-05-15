import React, { useContext } from "react";
//Styles
import {
  AboutContainer,
  AboutWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  AboutText,
  Column2,
  BtnWrap,
  ImageContainer,
  AboutTitleWrapper,
  ProfilePicture,
} from "./styles";
//Components
import { Button } from "../Shared/ButtonElement";
//Data
import { aboutDescription, googleDriveCvLink } from "../../configs/staticData";
//Tools
import { Fade } from "react-awesome-reveal";
//Assets
import ProfilePictureGreen from "../../assets/images/profile_pic_green.svg";
import ProfilePictureBlue from "../../assets/images/profile_pic_blue.svg";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const AboutSection = ({ description }) => {
  const { switchValue } = useContext(ThemeContext);
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Column1>
          <Fade>
            <TextWrapper>
              <AboutTitleWrapper>
                <TopLine blue_bg={switchValue ? +true : +false}>
                  Tiago Páscoa
                </TopLine>
                <Heading>ABOUT</Heading>
              </AboutTitleWrapper>
              <AboutText>{aboutDescription}</AboutText>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  hover_blue_bg={switchValue ? +true : +false}
                  hover_green_bg={switchValue ? +false : +true}
                  onClick={()=> window.open(googleDriveCvLink, "_blank")}
                >
                  getMyCv()
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Fade>
        </Column1>
        <Column2>
          <ImageContainer>
            <Fade>
              <ProfilePicture
                src={switchValue ? ProfilePictureBlue : ProfilePictureGreen}
                alt="Tiago Profile"
              />
            </Fade>
          </ImageContainer>
        </Column2>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
