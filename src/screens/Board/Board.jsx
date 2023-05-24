import styled from "styled-components";
import BoardGrid from "../../components/BoardGrid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BoardContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f4f5;
`;

const BoardHeader = styled.div`
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

const BoardList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 128px;
  box-sizing: border-box;
  gap: 32px;
`;

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:8080/api/board",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setBoard(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);

  return (
    <BoardContainer>
      <BoardHeader>
        <Title>게시판</Title>
        <Subtitle>당신의 생각을 나누세요</Subtitle>
      </BoardHeader>
      <BoardList>
        {board &&
          board.map((info, i) => {
            return <BoardGrid key={i} info={info} />;
          })}
      </BoardList>
      <Link to="/board/write">write</Link>
    </BoardContainer>
  );
}
