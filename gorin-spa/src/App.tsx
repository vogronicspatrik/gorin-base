import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';
import Menu from './components/Menu';
import Footer from './components/Footer';
import TrainingSchedule from './components/TrainingSchedule';
import Instructors from './components/Instructors';
import GoogleMap from './components/GoogleMap';

const AppContainer = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.background};
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const SectionContent = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const ContactItem = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.accent};
`;

const App: React.FC = () => {
  const googleMapsApiKey = 'AIzaSyDwun9Kuu4Ve75Z7lyx11DwerPihWxv_Ow'; // Cseréld le a saját API kulcsodra
  const gymLocation = {
    lat: 47.45925395810311, // Cseréld le az edzőterem valós koordinátáira
    lng: 19.14640719575657,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        <MainContent>
          <Section id="edzesek">
            <SectionTitle>Edzések</SectionTitle>
            <SectionContent>
              Edzéseink rendszeres időpontjai:
              <TrainingSchedule />
            </SectionContent>
          </Section>
          <Section id="edzestartok">
            <SectionTitle>Edzéstartók</SectionTitle>
            <SectionContent>
              <Instructors />
            </SectionContent>
          </Section>
          <Section id="helyszin">
            <SectionTitle>Helyszín</SectionTitle>
            <SectionContent>
              Edzőtermünk a város szívében található, könnyen megközelíthető helyen.
              <GoogleMap apiKey={googleMapsApiKey} lat={gymLocation.lat} lng={gymLocation.lng} />
            </SectionContent>
          </Section>
          <Section id="tortenetunk">
            <SectionTitle>Történetünk</SectionTitle>
            <SectionContent>
              Itt olvasható az egyesület története...
            </SectionContent>
          </Section>
          <Section id="kapcsolat">
            <SectionTitle>Kapcsolat</SectionTitle>
            <SectionContent>
              <ContactInfo>
                <ContactItem>Telefonszám: +36 1 234 5678</ContactItem>
                <ContactItem>Email: info@karateegyesulet.hu</ContactItem>
              </ContactInfo>
            </SectionContent>
          </Section>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
