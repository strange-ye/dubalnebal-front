// YoutubeSearch.jsx 파일
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchYoutubeAction } from "./store/actions"; // 가정: Redux 액션 파일 경로
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 16px;
  min-width: 400px;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  width: 512px;
  /* flex: 1; */
  /* width: 100%; */
  &:focus {
    outline: 1px solid #29bbd4;
  }
  background: #fff2f2;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #6c9bcf;
  border-radius: 32px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const YoutubeSearch = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    dispatch(searchYoutubeAction(keyword));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <SearchContainer>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색"
        ></Input>
        <Button onClick={handleSearch}>검색</Button>
      </SearchContainer>
      {/* <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button> */}
    </div>
  );
};

export default YoutubeSearch;
