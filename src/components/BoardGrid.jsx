import whoAreYou from "../assets/image/whoAreYou.png";
import styled from "styled-components";
import userImage1 from "../assets/image/userImage1.png";
import { Link, useNavigate } from "react-router-dom";
import Image from "../util/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const BoardContainer = styled.div`
  display: flex;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 32px;
`;

const BoardImage = styled.img`
  width: 128px;
  height: 160px;
  /* background: url(${whoAreYou}) no-repeat center;
  background-size: cover; */
  border-radius: 16px;
`;

const BoardBody = styled.div`
  display: flex;
  flex: 1;
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
  border-radius: 50%;
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

const HeartIcon = styled.div`
  width: 48px;
  height: 48px;
  fill: #ba1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BoardGrid({ info }) {
  const {
    board_id,
    board_title,
    board_content,
    board_image,
    board_view_cnt,
    board_created_at,
    user_name,
    user_image,
  } = info || {};
  const navigate = useNavigate();

  const [heart, setHeart] = useState(false);

  const onEditClick = () => {
    navigate(`/board/update/${board_id}`);
  };

  const onHeartClick = () => {
    const formData = new FormData();
    formData.append("Board_board_id", board_id);

    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/board/like",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then(() => {
          setHeart((prev) => !prev);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:8080/api/board/like/${board_id}`,
        headers: {
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          // console.log(res.status === 200);
          if (res.status === 200) {
            setHeart(true);
          }
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);

  return (
    <BoardContainer>
      <BoardImage src={`/image/${board_image}`} />
      <BoardBody>
        <BoardTitle>{board_title}</BoardTitle>
        <BoardContent>{board_content}</BoardContent>
        <ExtraInfo>
          <User>
            <UserImage src={Image(user_image)} />
            <UserName>{user_name}</UserName>
          </User>
          <BoardInfo>
            <Date>{board_created_at}</Date>
            <View>
              <ViewLabel>조회수</ViewLabel>
              <ViewCnt>{board_view_cnt}</ViewCnt>
            </View>
            <HeartIcon onClick={onHeartClick}>
              {heart ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50%"
                  height="50%"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50%"
                  height="50%"
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              )}
            </HeartIcon>
            <EditIcon onClick={onEditClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="50%"
                height="50%"
              >
                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
              </svg>
            </EditIcon>
            <Link to={`/board/${board_id}`}>읽기</Link>
          </BoardInfo>
        </ExtraInfo>
      </BoardBody>
    </BoardContainer>
  );
}
