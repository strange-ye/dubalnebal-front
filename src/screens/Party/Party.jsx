import styled from "styled-components";
import PartyCard from "../../components/PartyCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const PartyContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f4f5;
`;

const PartyHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 64px 0px;
`;

const Title = styled.div`
  font-size: 36px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8e9192;
`;

const PartyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
  gap: 32px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Party() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PartyContainer>
      <PartyHeader>
        <Title>파티</Title>
        <Subtitle>새로운 만남을 약속해보세요</Subtitle>
      </PartyHeader>
      <PartyList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => {
          return (
            <PartyCard
              key={i}
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          );
        })}
      </PartyList>
      <Link to="/party/write">write</Link>
    </PartyContainer>
  );
}
