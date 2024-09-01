import React, { useState } from 'react';
import styled from 'styled-components';
import InstructorCard from './InstructorCard';
import InstructorModal from './InstructorModal';

const InstructorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
`;

const InstructorRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

interface Instructor {
  id: number;
  name: string;
  rank: string;
  image: string;
  description: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Tóth Balázs",
    rank: "2. dan",
    image: "/images/balazs.jpg",
    description: "Kovács János 20 éve gyakorolja a karatét. Számos versenyen ért el kiemelkedő eredményeket, és 10 éve oktat gyerekeket és felnőtteket egyaránt."
  },
  {
    id: 2,
    name: "Csiszár Attila",
    rank: "1. dan",
    image: "/images/csiszi.jpg",
    description: "Nagy Éva 15 éve kezdte a karatét. Specializációja a kata, amelyben országos bajnoki címet is szerzett. Különösen a gyerekek oktatásában jeleskedik."
  },
  {
    id: 3,
    name: "Mile Dávid",
    rank: "1. kyu",
    image: "/images/david.jpg",
    description: "Szabó Péter 12 éve karatézik. Fő erőssége a kumite, amelyben nemzetközi versenyeken is sikeresen szerepelt. A felnőtt csoport edzéseit vezeti."
  },
  {
    id: 4,
    name: "Vogronics Patrik",
    rank: "1. dan",
    image: "/images/patrik.jpg",
    description: "Kiss Mária 8 éve csatlakozott a karate világához. Bár viszonylag új a sportágban, lelkesedése és tehetsége gyorsan az edzői csapatba emelte."
  }
];

const Instructors: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  return (
    <InstructorsContainer>
      <InstructorRow>
        {instructors.slice(0, 2).map(instructor => (
          <InstructorCard
            key={instructor.id}
            name={instructor.name}
            rank={instructor.rank}
            image={instructor.image}
            onClick={() => setSelectedInstructor(instructor)}
          />
        ))}
      </InstructorRow>
      <InstructorRow>
        {instructors.slice(2, 4).map(instructor => (
          <InstructorCard
            key={instructor.id}
            name={instructor.name}
            rank={instructor.rank}
            image={instructor.image}
            onClick={() => setSelectedInstructor(instructor)}
          />
        ))}
      </InstructorRow>
      {selectedInstructor && (
        <InstructorModal
          name={selectedInstructor.name}
          description={selectedInstructor.description}
          onClose={() => setSelectedInstructor(null)}
        />
      )}
    </InstructorsContainer>
  );
};

export default Instructors;