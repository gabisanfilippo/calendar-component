import { CalendarChangeParams } from "primereact/calendar";
import { Dispatch, FC, SetStateAction } from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import * as S from "./styles";
import { locale, addLocale } from "primereact/api";
import {
  dayNames,
  dayNamesMin,
  dayNamesShort,
  monthNames,
  monthNamesShort,
} from "../data";

interface IProps {
  setCalendarValue: Dispatch<SetStateAction<any>>;
  mode?: "working days";
  minDate?: Date;
  maxDate?: Date;
  modal: boolean;
  showTime: boolean;
}

export const InputCalendar: FC<IProps> = ({
  setCalendarValue,
  mode,
  minDate,
  maxDate,
  modal,
  showTime,
}) => {
  addLocale("pt", {
    closeText: "Fechar",
    prevText: "Anterior",
    nextText: "Próximo",
    // currentText: "Começo",
    monthNames: monthNames,
    monthNamesShort: monthNamesShort,
    dayNames: dayNames,
    dayNamesShort: dayNamesShort,
    dayNamesMin: dayNamesMin,
    weekHeader: "Semana",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
    timeOnlyTitle: "Só Horas",
    timeText: "Tempo",
    hourText: "Hora",
    minuteText: "Minuto",
    secondText: "Segundo",
    currentText: "Data Atual",
    ampm: false,
    month: "Mês",
    week: "Semana",
    day: "Dia",
    allDayText: "Todo Dia",
  });
  locale("pt");

  return (
    <>
      <S.CalendarStyled
        showIcon={true}
        icon={<BsFillCalendarEventFill />}
        placeholder="dd/mm/aaaa"
        dateFormat="dd/mm/yy"
        disabledDays={mode && [0, 6]}
        minDate={minDate && minDate}
        maxDate={maxDate && maxDate}
        touchUI={modal}
        locale="pt"
        showTime={showTime}
        hourFormat="24"
        onChange={(event: CalendarChangeParams) => {
          setCalendarValue(event.target.value?.toLocaleString());
        }}
      ></S.CalendarStyled>
    </>
  );
};
