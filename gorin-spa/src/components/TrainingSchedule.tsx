import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const DayContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
`;

const DayTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.header};
  margin-bottom: 0.5rem;
`;

const TrainingItem = styled.p`
  color: ${props => props.theme.colors.accent};
  margin: 0.5rem 0;
`;

const TrainingSchedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <DayContainer>
        <DayTitle>Kedd</DayTitle>
        <TrainingItem>17:30 - 19:00 Gyerek edzés</TrainingItem>
        <TrainingItem>19:30 - 20:30 Felnőtt edzés</TrainingItem>
      </DayContainer>
      <DayContainer>
        <DayTitle>Csütörtök</DayTitle>
        <TrainingItem>18:00 - 19:10 Gyerek edzés</TrainingItem>
        <TrainingItem>19:15 - 20:45 Felnőtt edzés</TrainingItem>
      </DayContainer>
    </ScheduleContainer>
  );
};

export default TrainingSchedule;