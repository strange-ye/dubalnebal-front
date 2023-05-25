import React from "react";
import { useDispatch } from "react-redux";
import { clickVideoAction } from "./store/actions"; // 가정: Redux 액션 파일 경로
import styled from "styled-components";

const VideoItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px dashed black;
`;

const VideoThumbnail = styled.img`
  width: 120px;
  height: 90px;
  margin-right: 10px;
`;

const VideoTitle = styled.span`
  font-size: 16px;
  color: #333;
`;

const YoutubeVideoItem = ({ video }) => {
  const dispatch = useDispatch();

  const clickVideoHandler = () => {
    dispatch(clickVideoAction(video));
  };

  return (
    <VideoItem onClick={clickVideoHandler}>
      <VideoThumbnail src={video.snippet.thumbnails.default.url} alt="" />
      <VideoTitle>{video.snippet.title}</VideoTitle>
    </VideoItem>
  );
};

export default YoutubeVideoItem;
