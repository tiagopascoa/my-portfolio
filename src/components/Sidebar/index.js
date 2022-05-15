import React, { useContext } from "react";
//Styles
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const SideBar = ({ toggle, isOpen }) => {
  const { switchValue } = useContext(ThemeContext);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            blue_bg={switchValue ? +true : +false}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            blue_bg={switchValue ? +true : +false}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contacts"
            onClick={toggle}
            blue_bg={switchValue ? +true : +false}
          >
            Contacts
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
