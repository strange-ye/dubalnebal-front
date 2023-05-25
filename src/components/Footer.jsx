import styled from "styled-components";

const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 64px; */

  background-color: rgb(255, 251, 245);
`;

const Bold = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #6f6f6f;
`;

export default function Footer() {
  return (
    <Container>
      <Bold>&copy;2023 SSAFY 1학기 관통 프로젝트 김령은 이상호</Bold>
    </Container>
  );
}
