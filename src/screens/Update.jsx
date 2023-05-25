import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  gap: 16px;
  min-width: 400px;
`;

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

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data.image[0]);
    formData.append("user_password", data.user_password);
    formData.append("user_name", data.user_name);
    formData.append("user_email", data.user_email);
    formData.append("file", data.image[0]);

    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/update",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          alert("사용자 정보 변경 성공");
          navigate("/user/profile");
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
  }, []);

  return (
    <BoardContainer>
      <BoardHeader>
        <Title>사용자 정보 업데이트</Title>
        <Subtitle>새로운 당신을 기록하세요!</Subtitle>
      </BoardHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="user_password">비밀번호</Label>
        <Input
          id="user_password"
          type="password"
          {...register("user_password", {
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
        {errors?.user_password?.message}
        <Label htmlFor="userName">닉네임</Label>
        <Input
          id="user_name"
          type="text"
          {...register("user_name", {
            required: true,
            // minLength: {
            //   value: 8,
            //   message: "Please enter at least 8 digits of your nickname",
            // },
            // maxLength: {
            //   value: 20,
            //   message: "Please enter the nickname in 20 digits or less",
            // },
          })}
        />
        {errors?.user_name?.message}
        <Label htmlFor="user_email">이메일</Label>
        <Input
          id="user_email"
          type="email"
          {...register("user_email", {
            required: true,
            // minLength: {
            //   value: 8,
            //   message: "Please enter at least 8 digits of your profileImage",
            // },
            // maxLength: {
            //   value: 20,
            //   message: "Please enter the profileImage in 20 digits or less",
            // },
          })}
        />
        {errors?.user_email?.message}
        <InputSet>
          <Label htmlFor="image">이미지</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
          {errors?.category?.message ? (
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          ) : null}
        </InputSet>
        <Button type="submit">제출</Button>
      </Form>
    </BoardContainer>
  );
};

export default Update;
