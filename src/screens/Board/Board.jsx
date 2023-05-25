import styled from "styled-components";
import BoardGrid from "../../components/BoardGrid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const BoardContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 256px;

  background-color: rgb(255, 251, 245);
`;

const BoardHeader = styled.div`
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

const BoardList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 0 128px; */
  box-sizing: border-box;
  gap: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;

  align-items: center;
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
  width: 512px;
  /* flex: 1; */
  /* width: 100%; */
  &:focus {
    outline: 1px solid #6c9bcf;
  }
  background: #fff2f2;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #6c9bcf;
  border-radius: 32px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const WriteLink = styled(Link)`
  width: 48px;
  height: 48px;
  fill: #6c9bcf;
`;

const WriteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 64px;
`;

export default function Board() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [board, setBoard] = useState([]);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // logic
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    const formData = new FormData();
    formData.append("word", data.word);
    formData.append("key", data.word);

    try {
      axios({
        method: "get",
        url: "http://localhost:8080/api/board",
        params: {
          word: data.word,
          // key: data.word,
        },
      })
        .then((res) => {
          console.log(res);
          setBoard(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  };

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:8080/api/board/all",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          setBoard(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);

  return (
    <BoardContainer>
      <BoardHeader>
        <Title>게시판</Title>
        <Subtitle>당신의 생각을 나누세요</Subtitle>
      </BoardHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="word"
          type="text"
          {...register("word", {
            required: true,
          })}
          onChange={onChange}
          value={keyword}
          placeholder="검색"
        ></Input>
        <Button type="submit">검색</Button>
      </Form>
      <WriteContainer>
        <WriteLink to="/board/write">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="100%"
            height="100%"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </WriteLink>
      </WriteContainer>
      <BoardList>
        {board &&
          board.map((info, i) => {
            return <BoardGrid key={i} info={info} />;
          })}
      </BoardList>
    </BoardContainer>
  );
}
