import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

const CloseButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

interface InstructorModalProps {
  name: string;
  description: string;
  onClose: () => void;
}

const InstructorModal: React.FC<InstructorModalProps> = ({ name, description, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>{name}</h2>
        <p>{description}</p>
        <CloseButton onClick={onClose}>Bezárás</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default InstructorModal;