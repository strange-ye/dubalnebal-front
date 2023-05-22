import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/image/loginDogs.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8080/api/";

const LoginContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;

  background-color: #f2f4f5;
`;

const LoginLeft = styled.div`
  margin: auto;
  translate: 0% -20%;
  flex: 1;
`;

const LoginRight = styled.div`
  flex: 1;
  background: url(${loginImage}) no-repeat center;
  background-size: cover;
`;

const Image = styled.img`
  object-fit: fill;
`;

const Title = styled.div`
  font-size: 36px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #8e9192;
`;

const LoginWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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

const SignUpQuestion = styled.div`
  display: flex;
  gap: 4px;
  color: #5c5f60;
`;

const SignUpLink = styled(Link)`
  color: #009fb6;
`;

const LoginFormContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* outline: 1px solid red; */
  min-width: 400px;
  gap: 16px;
`;

const Login = () => {
  // state
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
        url: "http://localhost:8080/api/user/login",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          // console.log(res.data["access-token"]);
          localStorage.setItem("access_token", res.data["access-token"]);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);
  return (
    <LoginContainer>
      <LoginLeft>
        <LoginWindow>
          <LoginHeader>
            <Title>로그인</Title>
            <Subtitle>함께 할 사람을 찾아보세요</Subtitle>
          </LoginHeader>
          <LoginFormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputSet>
                <Label htmlFor="user_identifier">아이디</Label>
                <Input
                  id="user_identifier"
                  {...register("user_identifier", {
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
                {errors?.user_identifier?.message ? (
                  <ErrorMessage>
                    {errors?.user_identifier?.message}
                  </ErrorMessage>
                ) : null}
              </InputSet>
              <InputSet>
                <Label htmlFor="user_password">비밀번호</Label>
                <Input
                  id="user_password"
                  type="password"
                  {...register("user_password", {
                    required: true,
                    // minLength: {
                    //   value: 8,
                    //   message:
                    //     "Please enter at least 8 digits of your password",
                    // },
                    // maxLength: {
                    //   value: 20,
                    //   message: "Please enter the password in 20 digits or less",
                    // },
                  })}
                />
                {errors?.user_password?.message ? (
                  <ErrorMessage>{errors?.user_password?.message}</ErrorMessage>
                ) : null}
              </InputSet>
              <Button type="submit">제출</Button>
            </Form>
            <SignUpQuestion>
              <div>계정이 필요하신가요?</div>
              <SignUpLink>회원가입하기</SignUpLink>
            </SignUpQuestion>
          </LoginFormContainer>
        </LoginWindow>
      </LoginLeft>
      <LoginRight>
        {/* <Image src={loginImage} alt="Dog image for Login Page" /> */}
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
