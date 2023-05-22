import styled from "styled-components";
import userImage1 from "../assets/image/userImage1.png";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;

  /* flex: 1; */
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
`;

const UserName = styled.span`
  font-size: 14px;
  width: fit-content;
  color: #191c1d;
`;

const CommentContent = styled.div`
  font-size: 14px;
  flex: 1;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  color: #444748;
`;

const Date = styled.div`
  font-size: 14px;
`;

const Button = styled.button`
  border: none;
  border-radius: 16px;
  outline: 0;
  background-color: transparent;

  padding: 8px 16px;
  cursor: pointer;

  font-size: 14px;
  color: #444748;
`;

export default function Comment() {
  return (
    <CommentContainer>
      <Top>
        <User>
          <UserImage src={userImage1} />
          <UserName>사용자 이름</UserName>
        </User>
        <CommentContent>
          대충 이런 내용의 댓글이 잔득 쓰인다는 내용 적을 것 .대충 이런 내용의
          댓글이 잔득 쓰인다는 내용 적을 것 .대충 이런 내용의 댓글이 잔득
          쓰인다는 내용 적을 것 .대충 이런 내용의 댓글이 잔득 쓰인다는 내용 적을
          것 .대충 이런 내용의 댓글이 잔득 쓰인다는 내용 적을 것 .
        </CommentContent>
      </Top>
      <Bottom>
        <Date>2023.05.17</Date>
        <Button>삭제</Button>
        <Button>수정</Button>
      </Bottom>
    </CommentContainer>
  );
}
