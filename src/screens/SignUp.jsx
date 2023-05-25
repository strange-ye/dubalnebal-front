import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/image/signUpImage.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BASE_URL = "http://localhost:8080/api/";

const LoginContainer = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: row;

  background-color: rgb(255, 251, 245);
`;

const LoginLeft = styled.div`
  margin: auto;
  /* translate: 0% -10%; */
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
  background: #fff2f2;
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
    const formData = new FormData();
    console.log(data.image[0]);
    formData.append("user_identifier", data.user_identifier);
    formData.append("user_password", data.user_password);
    formData.append("user_name", data.user_name);
    formData.append("user_email", data.user_email);
    formData.append("file", data.image[0]);
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/signup",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          // console.log(res.data["access-token"]);
          // localStorage.setItem("access_token", res.data["access-token"]);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      // navigate("/");
    }
  }, []);
  return (
    <LoginContainer>
      <LoginRight>
        {/* <Image src={loginImage} alt="Dog image for Login Page" /> */}
      </LoginRight>
      <LoginLeft>
        <LoginWindow>
          <LoginHeader>
            <Title>회원가입</Title>
            <Subtitle>다른 사람과 함께 거닐어 보세요.</Subtitle>
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
              <InputSet>
                <Label htmlFor="user_name">닉네임</Label>
                <Input
                  id="user_name"
                  {...register("user_name", {
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
                {errors?.user_name?.message ? (
                  <ErrorMessage>{errors?.user_name?.message}</ErrorMessage>
                ) : null}
              </InputSet>
              <InputSet>
                <Label htmlFor="user_email">이메일</Label>
                <Input
                  id="user_email"
                  {...register("user_email", {
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
                {errors?.user_email?.message ? (
                  <ErrorMessage>{errors?.user_email?.message}</ErrorMessage>
                ) : null}
              </InputSet>
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
              <Button type="submit">회원가입</Button>
            </Form>
            <SignUpQuestion>
              <div>이미 계정이 있으신가요?</div>
              <SignUpLink>로그인하기</SignUpLink>
            </SignUpQuestion>
          </LoginFormContainer>
        </LoginWindow>
      </LoginLeft>
    </LoginContainer>
  );
};

export default Login;

// import { useForm } from "react-hook-form";
// import axios from "axios";

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//     // fetch("http://localhost:8080/api/user/signup", {
//     //   method: "POST",
//     //   "Content-Type": "application/json",
//     //   body: JSON.stringify(data),
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => console.log(data));
//     try {
//       axios({
//         method: "post",
//         url: "http://localhost:8080/api/user/signup",
//         data: data,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => console.log(JSON.parse(res)))
//         .catch((err) => console.log(err));
//     } catch {
//       console.log("error occured");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="user_identifier">아이디</label>
//         <input
//           id="user_identifier"
//           {...register("user_identifier", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "Please enter at least 8 digits of your ID",
//             },
//             maxLength: {
//               value: 20,
//               message: "Please enter your ID in 20 digits or less",
//             },
//           })}
//         />
//         {errors?.user_identifier?.message}
//         <label htmlFor="user_password">비밀번호</label>
//         <input
//           id="user_password"
//           type="password"
//           {...register("user_password", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "Please enter at least 8 digits of your password",
//             },
//             maxLength: {
//               value: 20,
//               message: "Please enter the password in 20 digits or less",
//             },
//           })}
//         />
//         {errors?.user_password?.message}
//         <label htmlFor="userName">닉네임</label>
//         <input
//           id="user_name"
//           type="text"
//           {...register("user_name", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "Please enter at least 8 digits of your nickname",
//             },
//             maxLength: {
//               value: 20,
//               message: "Please enter the nickname in 20 digits or less",
//             },
//           })}
//         />
//         {errors?.user_name?.message}
//         <label htmlFor="user_email">이메일</label>
//         <input
//           id="user_email"
//           type="email"
//           {...register("user_email", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "Please enter at least 8 digits of your profileImage",
//             },
//             maxLength: {
//               value: 20,
//               message: "Please enter the profileImage in 20 digits or less",
//             },
//           })}
//         />
//         {errors?.user_email?.message}
//         <button type="submit">제출</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
