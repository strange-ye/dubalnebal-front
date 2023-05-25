import styled from "styled-components";
import happyDog from "../../assets/image/happyDog.png";
import userImage1 from "../../assets/image/userImage1.png";
import Comment from "../../components/Comment";
import CommentWriter from "../../components/CommentWriter";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ImageUrl from "../../util/image";

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
  padding: 64px 256px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #5c5f60;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
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

const Start = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  color: #5c5f60;
`;

const End = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  color: #5c5f60;
`;

const HeartIcon = styled.div`
  width: 48px;
  height: 48px;
  fill: #ba1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeartNum = styled.div`
  color: #1f1f1f;
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
          console.log(res.data);
          setBoardData(res.data);
          return res.data;
        })
        // .then((res) => {
        //   console.log(res);
        //   axios({
        //     method: "get",
        //     url: `http://localhost:8080/api/images/${res.board_image}`,
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }).then((res) => {
        //     console.log(res.data);
        //     setBoardData((prev) => ({
        //       ...prev,
        //       board_image: res.data,
        //     }));
        //   });
        // })
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
      <Image src={ImageUrl(boardData.board_image)} />
      <BoardBody>
        <Circle />
        <Title>{boardData.board_title}</Title>

        <Content>{boardData.board_content}</Content>
        <Info>
          <Start>
            <User>
              <UserImage src={ImageUrl(boardData.user_image)} />
              <UserName>{boardData.user_name}</UserName>
            </User>
            <Date>{boardData.board_created_at}</Date>
          </Start>
          <End>
            <HeartNum>조회수: {boardData.board_view_cnt}</HeartNum>
            <HeartNum>좋아요: 82</HeartNum>
            <HeartIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="50%"
                height="50%"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </HeartIcon>
          </End>
        </Info>
        <CommentTop>
          <CommentNumber>{commentData.length}개의 댓글</CommentNumber>
          <Triangle />
        </CommentTop>
        <CommentWriter board_id={boardData.board_id} />
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
