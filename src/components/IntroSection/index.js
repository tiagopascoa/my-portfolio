import React, { useState, useContext } from "react";
//Styles
import {
    IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1,
    IntroH2,
    IntroBtnWrapper,
    ArrowRight,
    ArrowForward,
  } from "./styles";
  import { Button } from "../Shared/ButtonElement";
//Assets
import Video from "../../assets/videos/video.mp4";
import Video2 from "../../assets/videos/video2.mp4";
//Tools
import { Typewriter } from "react-simple-typewriter";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const IntroSection = () => {
  const [hover, setHover] = useState(false);
  const { switchValue } = useContext(ThemeContext);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <IntroContainer id="home">
      <IntroBg>
        <VideoBg autoPlay loop muted src={switchValue ? Video2 : Video} type="video/mp4" />
      </IntroBg>
      <IntroContent>
        <IntroH1>Hello everyone 👋</IntroH1>
        <IntroH2>{" "}
                <span style={{ color: "#fff" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["My name is Tiago and I'm a Software Developer!"]}
                    /* loop={5} */
                    cursor
                    cursorStyle="_"
                    typeSpeed={125}
                    delaySpeed={1000}
                  />
                </span></IntroH2>
        <IntroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            green_bg={switchValue ? +false : +true}
            blue_bg={switchValue ? +true : +false}
            dark_text={+true}
            hover_white={+true}
          >
            About {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroSection;
