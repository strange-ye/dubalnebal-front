import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImage from "../../assets/image/ProfileImage.png";
import BoardGrid from "../../components/BoardGrid";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "../../styles/calendar.css";
import moment from "moment";
import CustomCalendar from "../../components/CustomCalendar";
import axios from "axios";

const Container = styled.div``;

const WindowContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;

  background-color: #f2f4f5;
`;

const WindowLeft = styled.div`
  flex: 1;
  padding-left: 64px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const WindowRight = styled.div`
  flex: 1;
  padding-right: 64px;
`;

const ProfileContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f4f5;
`;

const ProfileHeader = styled.div`
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

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: fit-content;
  width: 100%;
  box-sizing: border-box;
`;

const UserLeft = styled.div`
  display: flex;

  gap: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 4px 0;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserEmail = styled.div`
  color: #444748;
`;

const UserId = styled.div`
  color: #444748;
`;

const UserImage = styled.img`
  width: 96px;
  height: 96px;
`;

const UserRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Edit = styled.div`
  color: #444748;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
`;

const BoardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function Profile() {
  const [userData, setUserData] = useState([]);
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:8080/api/user/profile`,
        headers: {
          "Content-Type": "application/json",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => console.log(err));
      axios({
        method: "get",
        url: `http://localhost:8080/api/board/profile`,
        headers: {
          "Content-Type": "application/json",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          setBoardData(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);

  return (
    <Container>
      <ProfileHeader>
        <Title>프로필</Title>
        <Subtitle>지금까지 나의 기록</Subtitle>
      </ProfileHeader>
      <WindowContainer>
        <WindowLeft>
          <ProfileContainer>
            <UserContainer>
              <UserLeft>
                <UserImage src={profileImage} />
                <UserInfo>
                  <UserName>{userData.user_name}</UserName>
                  <UserEmail>{userData.user_email}</UserEmail>
                  <UserId>{userData.user_identifier}</UserId>
                </UserInfo>
              </UserLeft>
              <Link to="/update">
                <UserRight>
                  <Edit>수정</Edit>
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="50%"
                      height="50%"
                    >
                      <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                  </Icon>
                </UserRight>
              </Link>
            </UserContainer>
          </ProfileContainer>
          <BoardContainer>
            <BoardTitle>작성글</BoardTitle>
            <BoardList>
              {boardData &&
                boardData.map((info, i) => {
                  return <BoardGrid key={i} info={info} />;
                })}
            </BoardList>
          </BoardContainer>
        </WindowLeft>
        <WindowRight>
          <CustomCalendar />
        </WindowRight>
      </WindowContainer>
    </Container>
  );
}
