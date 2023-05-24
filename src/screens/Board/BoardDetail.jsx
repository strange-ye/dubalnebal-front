import styled from "styled-components";
import happyDog from "../../assets/image/happyDog.png";
import userImage1 from "../../assets/image/userImage1.png";
import Comment from "../../components/Comment";
import CommentWriter from "../../components/CommentWriter";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 372px;
  object-fit: cover;
`;

const BoardBody = styled.div`
  padding: 64px 64px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  gap: 32px;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  color: #5c5f60;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #5c5f60;
`;

const Date = styled.span``;

const Content = styled.div`
  white-space: pre-line;
  margin-top: 32px;
  font-size: 16px;
  line-height: 32px;
`;

const Circle = styled.div`
  width: 720px;
  height: 720px;
  border-radius: 50%;
  position: absolute;
  left: -172px;
  top: 0px;
  background: #cde7ee;
  z-index: -1;
`;

const CommentTop = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 64px;
  margin-bottom: 32px;
  width: 100%;

  position: relative;
`;

const CommentNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Triangle = styled.div`
  position: absolute;
  width: 720px;
  height: 720px;
  right: -720px;
  top: -264px;
  z-index: -1;

  background: #cde7ee;
  transform: rotate(-120deg);
`;

const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function BoardDetail() {
  const [boardData, setBoardData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const location = useLocation();

  const board_id = location.pathname.split("/").at(-1);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:8080/api/board/${board_id}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setBoardData(res.data);
        })
        .catch((err) => console.log(err));
      axios({
        method: "get",
        url: `http://localhost:8080/api/comment/${board_id}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          setCommentData(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);
  return (
    <BoardContainer>
      <Image src={happyDog} />
      <BoardBody>
        <Circle />
        <Title>{boardData.board_title}</Title>
        <Info>
          <Date>{boardData.board_created_at}</Date>
          <User>
            <UserImage src={userImage1} />
            <UserName>{boardData.board_user_name}</UserName>
          </User>
        </Info>
        <Content>{boardData.board_content}</Content>
        <CommentTop>
          <CommentNumber>32개의 댓글</CommentNumber>
          <Triangle />
        </CommentTop>
        <CommentWriter />
        <CommentList>
          {commentData &&
            commentData.map((info, index) => {
              return <Comment info={info} key={info.comment_id} />;
            })}
        </CommentList>
      </BoardBody>
    </BoardContainer>
  );
}
