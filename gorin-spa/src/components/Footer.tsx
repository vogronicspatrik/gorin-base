import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  padding: 1rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2023 Gorin Karate Sportegyesület. Minden jog fenntartva.</p>
      <SocialIcons>
        <SocialLink href="https://www.facebook.com/profile.php?id=100034708460537" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/@balazstoth2079/featured" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/gorin.karate/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;