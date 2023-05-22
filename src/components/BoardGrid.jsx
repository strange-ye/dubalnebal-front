import whoAreYou from "../assets/image/whoAreYou.png";
import styled from "styled-components";
import userImage1 from "../assets/image/userImage1.png";
import { Link } from "react-router-dom";

const BoardContainer = styled(Link)`
  display: flex;
  background: #eceeef;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 32px;
`;

const BoardImage = styled.div`
  width: 128px;
  height: 160px;
  background: url(${whoAreYou}) no-repeat center;
  background-size: cover;
  border-radius: 16px;
`;

const BoardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  justify-content: space-between;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const BoardContent = styled.div`
  font-size: 14px;
  color: #444748;
`;

const ExtraInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  /* background: url(${userImage1}); */
`;

const UserName = styled.div`
  font-size: 12px;
  color: #5c5f60;
`;

const BoardInfo = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  align-items: center;
  font-size: 12px;
  color: #5c5f60;
`;

const Date = styled.div``;

const View = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const ViewLabel = styled.div``;

const ViewCnt = styled.div``;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  fill: #ba1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BoardGrid() {
  return (
    <BoardContainer to="/board/1">
      <BoardImage />
      <BoardBody>
        <BoardTitle>자네는 어디 강씨인가?</BoardTitle>
        <BoardContent>
          사람에게 치유와 위로를 주는 이 위대한 동물을 쉽게 기르겠다고 생각한
          사람이라면, 혹시 준비가 안 된 것은 아닌지 깊이 생각해봐야 한다.
        </BoardContent>
        <ExtraInfo>
          <User>
            <UserImage src={userImage1} />
            <UserName>사용자 이름</UserName>
          </User>
          <BoardInfo>
            <Date>2023.05.17</Date>
            <View>
              <ViewLabel>조회수</ViewLabel>
              <ViewCnt>173</ViewCnt>
            </View>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="50%"
                height="50%"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </Icon>
          </BoardInfo>
        </ExtraInfo>
      </BoardBody>
    </BoardContainer>
  );
}
