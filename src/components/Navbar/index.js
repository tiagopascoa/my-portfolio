import React, { useState, useEffect, useContext } from "react";
//Styles
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  LogoAndSwitch,
} from "./styles";
//Assets
import { FaBars } from "react-icons/fa";
//Components
import Switch from "../Switch";
//Context
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { switchValue, setSwitchValue } = useContext(ThemeContext);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <LogoAndSwitch>
            <NavLogo
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Tiago Páscoa
            </NavLogo>
            <Switch
              isOn={switchValue}
              handleToggle={() => setSwitchValue(!switchValue)}
            />
          </LogoAndSwitch>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                blue_bg={switchValue ? +true : +false}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                blue_bg={switchValue ? +true : +false}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contacts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                blue_bg={switchValue ? +true : +false}
              >
                Contacts
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
