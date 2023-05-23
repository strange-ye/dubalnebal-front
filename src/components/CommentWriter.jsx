import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CommentWriterContainer = styled.form``;

const TextArea = styled.textarea`
  width: 100%;
  height: 64px;
  border: 1px solid black;
`;

const Button = styled.button``;

export default function CommentWriter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();

  const onSubmit = (data) => {
    alert(
      JSON.stringify({
        ...data,
        board_id: location.pathname.split("/")[2],
      })
    );
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/comment",
        data: {
          ...data,
          board_id: location.pathname.split("/")[2],
        },
        headers: {
          "Content-Type": "application/json",
          HEADER_AUTH: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          alert("댓글 생성 성공!");
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  return (
    <CommentWriterContainer onSubmit={handleSubmit(onSubmit)}>
      <TextArea
        {...register("comment_content", {
          required: true,
        })}
      />
      <Button type="submit">작성</Button>
    </CommentWriterContainer>
  );
}
