import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
`;

const MenuLink = styled.a`
  color: ${props => props.theme.colors.background};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;

const Menu: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem><MenuLink href="#edzesek" onClick={() => scrollToSection('edzesek')}>Edzések</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#edzestartok" onClick={() => scrollToSection('edzestartok')}>Edzéstartók</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#helyszin" onClick={() => scrollToSection('helyszin')}>Helyszín</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#tortenetunk" onClick={() => scrollToSection('tortenetunk')}>Történetünk</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#kapcsolat" onClick={() => scrollToSection('kapcsolat')}>Kapcsolat</MenuLink></MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;