import React from "react";
import { useSelector } from "react-redux";

const YoutubeVideoDetail = () => {
  const video = useSelector((state) => state.video);

  if (!video) {
    return null;
  }

  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <h2>영상 보기!</h2>
      <iframe
        width="560"
        height="315"
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoDetail;
