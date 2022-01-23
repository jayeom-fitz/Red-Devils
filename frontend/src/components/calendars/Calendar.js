import React, { useState, useEffect, useCallback } from 'react';

// project imports

// third party
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// ===============================|| CALENDAR ||=============================== //

const Calendar = (props) => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();

  const [totalDate, setTotalDate] = useState([]);

  const setDate = useCallback(
    (y, m, d) => {
      props.setYear(y);
      props.setMonth(m);
      props.setDay(d);
    },
    [props],
  );

  const goToday = useCallback(() => {
    setDate(YEAR, MONTH, DAY);
    return MONTH;
  }, [YEAR, MONTH, DAY, setDate]);

  const changeDate = useCallback(
    (month) => {
      //이전 날짜
      let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
      let PVLastDay = new Date(YEAR, month - 1, 0).getDay();
      //다음 날짜
      const ThisLasyDay = new Date(YEAR, month, 0).getDay();
      const ThisLasyDate = new Date(YEAR, month, 0).getDate();

      //이전 날짜 만들기
      let PVLD = [];
      if (PVLastDay !== 6) {
        for (let i = 0; i < PVLastDay + 1; i++) {
          PVLD.unshift(PVLastDate - i);
        }
      }
      //다음 날짜 만들기
      let TLD = [];
      for (let i = 1; i < 7 - ThisLasyDay; i++) {
        if (i === 0) {
          return TLD;
        }
        TLD.push(i);
      }

      //현재날짜
      let TD = [];

      TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

      return PVLD.concat(TD, TLD);
    },
    [YEAR],
  );

  useEffect(() => {
    if (props.month === 0) setTotalDate(changeDate(goToday()));
    else setTotalDate(changeDate(props.month));
  }, [props.month, changeDate, goToday]);

  return (
    <>
      <ReactCalendar />
    </>
  );
};

export default Calendar;
