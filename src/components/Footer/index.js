import React, { useContext } from "react";
//Styles
import {
  IconsConainter,
  LinkToContact,
  FooterContainer,
  ContactsContainer,
  CopyContainer,
  CopyText,
} from "./styles";
//Tools
import { AttentionSeeker } from "react-awesome-reveal";
//Assets
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { switchValue } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer id="contacts">
      <ContactsContainer>
        <AttentionSeeker effect={"pulse"}>
          <IconsConainter>
            <LinkToContact
              href="https://www.linkedin.com/in/tiago-pascoa/"
              target="_blank"
              blue_bg={switchValue ? +true : +false}
            >
              <FaLinkedin size={55} />
            </LinkToContact>
            <LinkToContact
              href="mailto:tiagompascoa@gmail.com"
              blue_bg={switchValue ? +true : +false}
            >
              <HiMail size={70} />
            </LinkToContact>
            <LinkToContact
              href="https://github.com/tiagopascoa"
              target="_blank"
              blue_bg={switchValue ? +true : +false}
            >
              <FaGithubSquare size={55} />
            </LinkToContact>
          </IconsConainter>
        </AttentionSeeker>
      </ContactsContainer>
      <CopyContainer>
        <CopyText>CopyRight © {currentYear} Tiago Páscoa.</CopyText>
        <CopyText>All Rights Reserved</CopyText>
      </CopyContainer>
    </FooterContainer>
  );
};

export default Footer;
