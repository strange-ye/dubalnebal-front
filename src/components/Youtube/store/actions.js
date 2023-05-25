// store.js 파일
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // redux-thunk 임포트
import axios from "axios";

// 액션 타입 정의
const SEARCH_YOUTUBE = "SEARCH_YOUTUBE";
const CLICK_VIDEO = "CLICK_VIDEO";

// 액션 생성자
const searchYoutube = (videos) => ({
  type: SEARCH_YOUTUBE,
  payload: videos,
});

const clickVideo = (video) => ({
  type: CLICK_VIDEO,
  payload: video,
});

// 초기 상태
const initialState = {
  videos: [],
  video: null,
};

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_YOUTUBE:
      return {
        ...state,
        videos: action.payload,
      };
    case CLICK_VIDEO:
      return {
        ...state,
        video: action.payload,
      };
    default:
      return state; // 기존 상태 반환
  }
};

// 스토어 생성
const store = createStore(reducer, applyMiddleware(thunk));

// 비동기 통신은 요기서 진행시켜~~
const searchYoutubeAction = (payload) => {
  console.log("통신 실행?");
  const URL = "https://www.googleapis.com/youtube/v3/search";
  const API_KEY = "AIzaSyBONgmRbMvXcJTPsEMrkpwq38H6ZclD05c";
  return (dispatch) => {
    axios
      .get(URL, {
        params: {
          key: API_KEY,
          part: "snippet",
          q: payload,
          type: "video",
          maxResults: 10,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(searchYoutube(res.data.items));
      })
      .catch((err) => console.log(err));
  };
};

// payload: 비디오 객체가 들어온다.
const clickVideoAction = (payload) => {
  return (dispatch) => {
    dispatch(clickVideo(payload));
  };
};

export {
  store,
  searchYoutubeAction,
  clickVideoAction,
  searchYoutube,
  clickVideo,
}; // searchYoutube를 내보내도록 추가
