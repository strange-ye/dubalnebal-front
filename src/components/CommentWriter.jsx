import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CommentWriterContainer = styled.form``;

const TextArea = styled.textarea`
  width: 100%;
  height: 64px;
  outline: none;
  border: 1px solid #1f1f1f;
  border-radius: 16px;
  &:focus {
    border-color: #009fb6;
  }
  padding: 16px 32px;
  box-sizing: border-box;
  font-family: "omyu_pretty";
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  padding: 8px 24px;
  background: #009fb6;
  border-radius: 32px;
  border: none;
  color: #e1e3e4;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;
`;

export default function CommentWriter({ board_id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();

  const onSubmit = (data) => {
    console.log(board_id);
    alert(
      JSON.stringify({
        ...data,
        board_id: board_id,
      })
    );
    try {
      axios({
        method: "post",
        url: "http://localhost:8080/api/comment",
        data: {
          ...data,
          board_id: board_id,
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
      <Container>
        <Button type="submit">작성</Button>
      </Container>
    </CommentWriterContainer>
  );
}
