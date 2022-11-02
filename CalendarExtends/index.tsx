import { CalendarChangeParams } from "primereact/calendar";
import { locale, addLocale } from "primereact/api";
import * as S from "./styles";
import { Dispatch, FC, SetStateAction } from "react";
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
  showTime: boolean;
}

export const CalendarExtends: FC<IProps> = ({
  setCalendarValue,
  mode,
  minDate,
  maxDate,
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
        inline
        dateFormat="dd/mm/yy"
        locale="pt"
        disabledDays={mode && [0, 6]}
        minDate={minDate && minDate}
        maxDate={maxDate && maxDate}
        showTime={showTime}
        hourFormat="24"
        // value={date}
        onChange={(event: CalendarChangeParams) => {
          setCalendarValue(event.target.value?.toLocaleString());
        }}
      ></S.CalendarStyled>
    </>
  );
};
