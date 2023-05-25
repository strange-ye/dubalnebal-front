import { motion } from "framer-motion";
import PartyImage1 from "../assets/image/PartyImage1.png";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

const PartyTitleModalLeft = styled.div`
  display: flex;
  justify-content: end;
`;

const PartyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #eceeef;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 32px;

  gap: 16px;
`;

const PartyImage = styled.div`
  width: 320px;
  height: 400px;
  background: ${(props) =>
      props.src ? `url(${props.src})` : `url(${PartyImage1})`}
    no-repeat center;
  /* no-repeat center; */
  background-size: cover;
  border-radius: 16px;
`;

const PartyImageModal = styled.div`
  width: 320px;
  height: 480px;
  background: url(${PartyImage1}) no-repeat center;
  background-size: cover;
  border-radius: 16px;
`;

const PartyBodyModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px;
  flex: 1;
  line-height: 24px;
`;

const PartyContentModal = styled.div``;

const PartyBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`;

const PartyTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PartyInfo = styled.div`
  display: flex;
  width: 100%;
`;

const PartyInfoLeft = styled.div`
  font-weight: 400;
  color: #191c1d;
`;

const PartyInfoRight = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  gap: 8px;

  color: #2e3132;
  font-size: 16px;
  font-weight: 400;
`;

const PartyLocation = styled.div``;

const PartyDifficulty = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #009fb6;
`;

const PartyTime = styled.div``;

const PartyKm = styled.div``;

const PartyConstraint = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  color: #5c5f60;
`;

const PartyConstraintLeft = styled.div`
  display: flex;
  gap: 8px;
`;

const PartyConstraintRight = styled.div``;

const PartyButtons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 24px;
  background: #009fb6;
  border-radius: 32px;
  border: none;
  color: #e1e3e4;
  font-size: 16px;

  cursor: pointer;
`;

const ButtonModal = styled.button`
  padding: 8px 48px;
  background: #009fb6;
  border-radius: 32px;
  border: none;
  color: #e1e3e4;
  font-size: 16px;

  cursor: pointer;
`;

const PartyModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const PartyModalSmallButton = styled.button`
  padding: 8px 16px;
  background: white;
  border-radius: 8px;
  border: none;
  color: #4f4f4f;
  font-size: 12px;
`;

export default function PartyCard({
  info,
  isModalOpen,
  openModal,
  closeModal,
}) {
  const {
    party_id,
    course_explain,
    course_name,
    course_location,
    course_level,
    course_time,
    course_km,
    party_limit,
    user_count,
    party_depart_date,
    src,
  } = info;
  const participate = () => {
    (async () => {
      const response = await axios({
        method: "post",
        url: `http://localhost:8080/api/party/${party_id}`,
        headers: {
          "Content-Type": "application/json",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      });
      console.log(response);
    })();
  };

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <PartyContainer>
      <PartyImage src={src} />
      <PartyBody>
        <PartyTitle>{course_name}</PartyTitle>
        <PartyInfo>
          <PartyInfoLeft>
            <PartyLocation>{course_location}</PartyLocation>
          </PartyInfoLeft>
          <PartyInfoRight>
            <PartyDifficulty>{course_level}</PartyDifficulty>
            <PartyTime>{course_time}</PartyTime>
            <PartyKm>{course_km}km</PartyKm>
          </PartyInfoRight>
        </PartyInfo>
        <PartyConstraint>
          <PartyConstraintLeft>
            <div>현재 인원 / 제한 인원 :</div>
            <div>
              {user_count} / {party_limit}
            </div>
          </PartyConstraintLeft>
          <PartyConstraintRight>{party_depart_date}</PartyConstraintRight>
        </PartyConstraint>
        <PartyButtons>
          <Button onClick={participate}>참여</Button>
          <Button onClick={showModal}>자세히보기</Button>
        </PartyButtons>
      </PartyBody>
      {visible && (
        <Modal visible={visible} setVisible={setVisible}>
          <PartyImageModal />
          <PartyBodyModal>
            <PartyModalHeader>
              <PartyTitle>{course_name}</PartyTitle>
              <PartyTitleModalLeft>
                <PartyModalSmallButton>수정</PartyModalSmallButton>
                <PartyModalSmallButton>삭제</PartyModalSmallButton>
              </PartyTitleModalLeft>
            </PartyModalHeader>
            <PartyInfo>
              <PartyInfoLeft>
                <PartyLocation>{course_location}</PartyLocation>
              </PartyInfoLeft>
              <PartyInfoRight>
                <PartyDifficulty>{course_level}</PartyDifficulty>
                <PartyTime>{course_time}</PartyTime>
                <PartyKm>{course_km}km</PartyKm>
              </PartyInfoRight>
            </PartyInfo>
            <PartyConstraint>
              <PartyConstraintLeft>
                <div>현재 인원 / 제한 인원 :</div>
                <div>
                  {user_count} / {party_limit}
                </div>
              </PartyConstraintLeft>
              <PartyConstraintRight>{party_depart_date}</PartyConstraintRight>
            </PartyConstraint>
            <PartyContentModal>{course_explain}</PartyContentModal>
            <PartyButtons>
              <ButtonModal onClick={participate}>참여</ButtonModal>
              <ButtonModal onClick={hideModal}>닫기</ButtonModal>
            </PartyButtons>
          </PartyBodyModal>
        </Modal>
      )}
    </PartyContainer>
  );
}
