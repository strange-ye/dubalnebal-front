import styled from "styled-components";
import BoardGrid from "../../components/BoardGrid";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
  margin: 0 64px;
  gap: 32px;
`;

export default function Board() {
  return (
    <BoardContainer>
      <BoardHeader>
        <Title>게시판</Title>
        <Subtitle>당신의 생각을 나누세요</Subtitle>
      </BoardHeader>
      <BoardList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => {
          return <BoardGrid key={i} />;
        })}
      </BoardList>
      <Link to="/board/write">write</Link>
    </BoardContainer>
  );
}
