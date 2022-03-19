import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'onClick={toggle}>Quran</SidebarLink>
          <SidebarLink to='discover'onClick={toggle}>Tafsiir</SidebarLink>
          <SidebarLink to='services'onClick={toggle}>Hadith</SidebarLink>
          <SidebarLink to='signup'onClick={toggle}>Books</SidebarLink>
        </SidebarMenu>
       
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
