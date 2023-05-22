import { useForm } from "react-hook-form";
import axios from "axios";

const PartyWrite = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    // fetch("http://localhost:8080/api/user/signup", {
    //   method: "POST",
    //   "Content-Type": "application/json",
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/signup",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log(JSON.parse(res)))
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="user_identifier">아이디</label>
        <input
          id="user_identifier"
          {...register("user_identifier", {
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
        {errors?.user_identifier?.message}
        <label htmlFor="user_password">비밀번호</label>
        <input
          id="user_password"
          type="password"
          {...register("user_password", {
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
        {errors?.user_password?.message}
        <label htmlFor="userName">닉네임</label>
        <input
          id="user_name"
          type="text"
          {...register("user_name", {
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
        {errors?.user_name?.message}
        <label htmlFor="user_email">이메일</label>
        <input
          id="user_email"
          type="email"
          {...register("user_email", {
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
        {errors?.user_email?.message}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default PartyWrite;
