import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBtn>
            <NavBtnLink to='/'>Islamic Resources in Somali</NavBtnLink>
          </NavBtn>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='Quran'>Quran</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Tafsiir'>Tafsiir</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Hadith'>Hadith</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Books'>Books</NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo to='/'> بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
