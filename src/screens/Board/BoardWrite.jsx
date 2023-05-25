import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PartyContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(255, 251, 245);
`;

const PartyHeader = styled.div`
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

const Container = styled.div`
  width: 100%;
  padding: 0 256px;
  background-color: rgb(255, 251, 245);
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 8px 24px;
  background: #6c9bcf;
  border-radius: 32px;
  border: none;
  color: #e1e3e4;
  font-size: 16px;
  width: 100%;
  margin-top: 32px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  gap: 16px;
  min-width: 400px;
`;

const InputSet = styled.div`
  display: flex;
  /* flex: 1; */
  width: 100%;
  flex-direction: column;
  justify-content: start;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  /* flex: 1; */
  /* width: 100%; */
  &:focus {
    outline: 1px solid #29bbd4;
  }
  background: #fff2f2;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: #ba1a1a;
`;

export default function BoardWrite() {
  const [preview, setPreview] = useState("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image = watch("board_image");

  const navigate = useNavigate();

  // logic

  const imageSubmit = (data) => {
    const formData = new FormData();
    formData.append("uploadFile", data.image[0]);
    axios({
      method: "post",
      url: "http://localhost:8080/api/board/upload",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        alert("이미지 등록 성공");
      })
      .catch((err) => alert("이미지 등록 실패"));
  };

  const onSubmit = (data) => {
    // imageSubmit(data);
    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append("board_title", data.board_title);
    formData.append("board_content", data.board_content);
    formData.append("category", data.category);
    alert(JSON.stringify(data));
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/board",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          alert("포스트 작성 성공!");
          navigate("/board");
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (image && image.length > 0) {
      // 업로드한 파일이 존재하고 길이가 있을때
      const file = image[0]; // [0]을 한 이유는 콘솔에 찍어보면 0이라는 키값에 File이 들어있다.
      const url = URL.createObjectURL(file);
      setPreview(url); // 아까 만들어둔 미리보기 상태변경함수에 url로 변환시킨 url을 넣어준다.
    }
  }, [image]); // 이러면 avatar가 바뀔때마다 이 함수가 실행된다.

  return (
    <PartyContainer>
      <PartyHeader>
        <Title>보드 작성</Title>
        <Subtitle>다른 사람과 의견을 나누세요</Subtitle>
      </PartyHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputSet>
          <Label htmlFor="board_title">제목</Label>
          <Input
            id="board_title"
            {...register("board_title", {
              required: true,
              // minLength: {
              //   value: 8,
              //   message: "Please enter at least 8 digits of your ID",
              // },
              // maxLength: {
              //   value: 20,
              //   message: "Please enter your ID in 20 digits or less",
              // },
            })}
          />
          {errors?.board_title?.message ? (
            <ErrorMessage>{errors?.board_title?.message}</ErrorMessage>
          ) : null}
        </InputSet>
        <InputSet>
          <Label htmlFor="board_content">내용</Label>
          <Input
            id="board_content"
            {...register("board_content", {
              required: true,
              // minLength: {
              //   value: 8,
              //   message: "Please enter at least 8 digits of your password",
              // },
              // maxLength: {
              //   value: 20,
              //   message: "Please enter the password in 20 digits or less",
              // },
            })}
          />
          {errors?.board_content?.message ? (
            <ErrorMessage>{errors?.board_content?.message}</ErrorMessage>
          ) : null}
        </InputSet>
        <InputSet>
          <Label htmlFor="category">카테고리</Label>
          <Input
            id="category"
            {...register("category", {
              required: true,
              // minLength: {
              //   value: 8,
              //   message: "Please enter at least 8 digits of your password",
              // },
              // maxLength: {
              //   value: 20,
              //   message: "Please enter the password in 20 digits or less",
              // },
            })}
          />
          {errors?.category?.message ? (
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          ) : null}
        </InputSet>
        {preview && <img src={preview} />}
        <InputSet>
          <Label htmlFor="image">이미지</Label>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
          {errors?.category?.message ? (
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          ) : null}
        </InputSet>
        <Button type="submit">포스트 작성</Button>
      </Form>
    </PartyContainer>
  );
}
