import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          {...register("userId", {
            required: true,
            minLength: {
              value: 8,
              message: "Please enter at least 8 digits of your ID",
            },
            maxLength: {
              value: 20,
              message: "Please enter your ID in 20 digits or less",
            },
          })}
        />
        {errors?.userId?.message}
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Please enter at least 8 digits of your password",
            },
            maxLength: {
              value: 20,
              message: "Please enter the password in 20 digits or less",
            },
          })}
        />
        {errors?.password?.message}
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="nickname"
          {...register("nickname", {
            required: true,
            minLength: {
              value: 8,
              message: "Please enter at least 8 digits of your nickname",
            },
            maxLength: {
              value: 20,
              message: "Please enter the nickname in 20 digits or less",
            },
          })}
        />
        {errors?.nickname?.message}
        <label htmlFor="profileImage">닉네임</label>
        <input
          id="profileImage"
          type="profileImage"
          {...register("profileImage", {
            required: true,
            minLength: {
              value: 8,
              message: "Please enter at least 8 digits of your profileImage",
            },
            maxLength: {
              value: 20,
              message: "Please enter the profileImage in 20 digits or less",
            },
          })}
        />
        {errors?.profileImage?.message}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default SignUp;
