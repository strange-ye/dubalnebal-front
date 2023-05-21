import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/image/loginDogs.png";
import styled from "styled-components";

const BASE_URL = "http://localhost:8080/api/";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

const LoginLeft = styled.div`
  width: 50%;
  height: flex 1;
`;

const LoginRight = styled.div`
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="user_identifier">아이디</label>
            <input
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
            {errors?.user_identifier?.message}
            <label htmlFor="user_password">비밀번호</label>
            <input
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
            <button type="submit">제출</button>
          </form>
        </div>
      </LoginLeft>
      <LoginRight>
        <Image src={loginImage} alt="Dog image for Login Page" />
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
