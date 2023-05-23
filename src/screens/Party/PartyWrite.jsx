import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="party_duration">모집 기간</label>
        <input
          id="party_duration"
          type="datetime-local"
          {...register("party_duration", {
            required: true,
          })}
        />
        {errors?.party_duration?.message}
        <label htmlFor="party_depart_date">출발 시</label>
        <input
          id="party_depart_date"
          type="datetime-local"
          {...register("party_depart_date", {
            required: true,
          })}
        />
        {errors?.party_depart_date?.message}
        <label htmlFor="party_limit">최대 인원</label>
        <input
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
        <label htmlFor="course_id">코스 번호</label>
        <input
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
        <label htmlFor="party_title">파티 제목</label>
        <input
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
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default PartyWrite;
