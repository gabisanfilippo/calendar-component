import styled from "styled-components";
import { Calendar } from "primereact/calendar";

export const CalendarStyled = styled(Calendar)`
  width: 100%;
  input {
    background: #dfdfdf;
    color: #2a4999;
  }
  button {
    background: #2a4999;
    border: none;
    &:hover {
      background: #dae6ff !important;
    }
  }
`;
