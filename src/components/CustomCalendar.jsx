import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const Container = styled(Calendar)`
  width: 600px;
  height: 360px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PinkCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff2f2;
`;

const BlueCircle = styled(PinkCircle)`
  background-color: #006edc;
`;

const YellowCircle = styled(PinkCircle)`
  background-color: #ffff76;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 64px;
`;

const Description = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const marks = ["2023-05-01", "2023-05-17", "2023-05-24"];
  return (
    <TotalContainer>
      <Container
        calendarType="US"
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
      ></Container>
      <CircleContainer>
        <Description>
          <PinkCircle />
          <div>운동한 날</div>
        </Description>
        <Description>
          <BlueCircle />
          <div>선택한 날</div>
        </Description>
        <Description>
          <YellowCircle />
          <div>오늘</div>
        </Description>
      </CircleContainer>
    </TotalContainer>
  );
}
