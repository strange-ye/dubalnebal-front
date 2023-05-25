// YoutubeView.js 파일

import React from "react";
import YoutubeSearch from "../../components/Youtube/YoutubeSearch";
import YoutubeSearchResult from "../../components/Youtube/YoutubeSearchResult";
import YoutubeVideoDetail from "../../components/Youtube/YoutubeVideoDetail";
import styled from "styled-components";

const BoardContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 256px;

  background-color: rgb(255, 251, 245);
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

const YoutubeView = () => {
  return (
    <BoardContainer>
      <BoardHeader>
        <Title>유튜브</Title>
        <Subtitle>산책 영상을 찾아보세요</Subtitle>
      </BoardHeader>
      <YoutubeSearch />
      <hr />
      <YoutubeVideoDetail />
      <hr />
      <YoutubeSearchResult />
    </BoardContainer>
  );
};

export default YoutubeView;
