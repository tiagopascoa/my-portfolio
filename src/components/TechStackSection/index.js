import React, { useContext } from "react";
//Styles
import {
  TechStackContainer,
  TechStackWrapper,
  TechStackRow,
  Title,
  Tech,
  TechWrapper,
} from "./styles";
//Tools
import { Slide } from "react-awesome-reveal";
//Data
import { techStack } from "../../configs/staticData";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const TechStack = () => {
  const { switchValue } = useContext(ThemeContext);
  return (
    <TechStackContainer>
      <TechStackWrapper>
        <TechStackRow>
          <Title>TECHNOLOGY STACK</Title>
          <Tech>
            <Slide>
              {techStack.map((tech, index) => {
                return (
                  <TechWrapper
                    key={index}
                    blue_bg={switchValue ? +true : +false}
                  >
                    {tech}
                  </TechWrapper>
                );
              })}
            </Slide>
          </Tech>
        </TechStackRow>
      </TechStackWrapper>
    </TechStackContainer>
  );
};

export default TechStack;
