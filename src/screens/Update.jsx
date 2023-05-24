import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/update",
        data: data,
        headers: {
          "Content-Type": "application/json",
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="userName">닉네임</label>
        <input
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
        <label htmlFor="user_email">이메일</label>
        <input
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
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Update;
