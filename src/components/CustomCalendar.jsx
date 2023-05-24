import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

export default function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const marks = ["2023-05-01", "2023-05-17", "2023-05-24"];
  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileClassName={({ date, view }) => {
        if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          return "highlight";
        }
      }}
    />
  );
}
