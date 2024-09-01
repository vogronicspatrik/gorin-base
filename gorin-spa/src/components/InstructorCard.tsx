import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const InstructorImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const InstructorName = styled.h3`
  color: ${props => props.theme.colors.accent};
  margin: 0.5rem 0;
`;

const InstructorRank = styled.p`
  color: ${props => props.theme.colors.accent};
  margin: 0;
`;

interface InstructorCardProps {
  name: string;
  rank: string;
  image: string;
  onClick: () => void;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, rank, image, onClick }) => {
  return (
    <Card onClick={onClick}>
      <InstructorImage src={image} alt={name} />
      <InstructorName>{name}</InstructorName>
      <InstructorRank>{rank}</InstructorRank>
    </Card>
  );
};

export default InstructorCard;