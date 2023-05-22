import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 24px;
  background: #009fb6;
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
  background: #eceeef;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: #ba1a1a;
`;

export default function BoardWrite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // logic
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/board",
        data: data,
        headers: {
          "Content-Type": "application/json",
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

  return (
    <>
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
        <Button type="submit">포스트 작성</Button>
      </Form>
    </>
  );
}
