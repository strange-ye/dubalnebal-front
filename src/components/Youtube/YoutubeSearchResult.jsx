// YotubeSearchResult.jsx 파일
import React from "react";
import { useSelector } from "react-redux";
import YoutubeVideoItem from "./YoutubeVideoItem"; // 가정: YoutubeVideoItem 컴포넌트 경로
import styled from "styled-components";

const SearchResultContainer = styled.div`
  font-family: "Omu";
  margin-top: 20px;
`;

const SearchResultTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const YoutubeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const YoutubeSearchResult = () => {
  const videos = useSelector((state) => state.videos);
  return (
    <SearchResultContainer>
      <SearchResultTitle>검색 결과</SearchResultTitle>
      <YoutubeList>
        {videos &&
          videos.map((video) => (
            <YoutubeVideoItem key={video.id.videoId} video={video} />
          ))}
      </YoutubeList>
    </SearchResultContainer>
  );
};

export default YoutubeSearchResult;
