import { useForm } from "react-hook-form";
import axios from "axios";
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

const Container = styled.div`
  background-color: rgb(255, 251, 245);
  width: 100vw;
  height: 100vh;
`;

const PartyWrite = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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
        url: "http://localhost:8080/api/party",
        data: data,
        headers: {
          "Content-Type": "application/json",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          alert("파티 생성 성공!");
          navigate("/party");
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  return (
    <PartyContainer>
      <PartyHeader>
        <Title>파티 작성</Title>
        <Subtitle>약속을 만드세요</Subtitle>
      </PartyHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="party_duration">모집 기간</Label>
        <Input
          id="party_duration"
          type="datetime-local"
          {...register("party_duration", {
            required: true,
          })}
        />
        {errors?.party_duration?.message}
        <Label htmlFor="party_depart_date">출발 시</Label>
        <Input
          id="party_depart_date"
          type="datetime-local"
          {...register("party_depart_date", {
            required: true,
          })}
        />
        {errors?.party_depart_date?.message}
        <Label htmlFor="party_limit">최대 인원</Label>
        <Input
          id="party_limit"
          type="number"
          {...register("party_limit", {
            required: true,
            minLength: {
              value: 1,
              message: "Please enter at least 8 digits of your nickname",
            },
            maxLength: {
              value: 20,
              message: "Please enter the nickname in 20 digits or less",
            },
          })}
        />
        {errors?.party_limit?.message}
        <Label htmlFor="course_id">코스 번호</Label>
        <Input
          id="course_id"
          type="number"
          {...register("course_id", {
            required: true,
            minLength: {
              value: 1,
              message: "Please enter at least 8 digits of your profileImage",
            },
          })}
        />
        {errors?.course_id?.message}
        <Label htmlFor="party_title">파티 제목</Label>
        <Input
          id="party_title"
          type="text"
          {...register("party_title", {
            required: true,
            minLength: {
              value: 1,
              message: "Please enter at least 8 digits of your profileImage",
            },
          })}
        />
        {errors?.party_title?.message}
        <Button type="submit">제출</Button>
      </Form>
    </PartyContainer>
  );
};

export default PartyWrite;
