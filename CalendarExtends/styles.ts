import styled from "styled-components";
import { Calendar } from "primereact/calendar";

export const CalendarStyled = styled(Calendar)`
  width: 100% !important;
  .p-datepicker {
    background-color: #dfdfdf;
    color: #2a4999;
  }
  .p-datepicker-calendar {
    width: 100% !important;
  }
  .p-datepicker-header {
    background-color: #dfdfdf !important;
    color: #2a4999;
  }
  .p-datepicker table td.p-datepicker-today > span {
    background: #dae6ff;
  }
  td{
    padding: 0 !important;
  }
`;