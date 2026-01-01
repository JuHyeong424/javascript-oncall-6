import {Console} from "@woowacourse/mission-utils";

let DAY = ["월", "화", "수", "목", "금", "토", "일"];

export async function OutputView(month, startDay, calendar, getDate, getMonthHoliday) {
  const getDay = getMonthHoliday.map(value => value.day);

  if (startDay === "월") {
    DAY = ["월", "화", "수", "목", "금", "토", "일"];
  }
  if (startDay === "화") {
    DAY = ["화", "수", "목", "금", "토", "일", "월"];
  }
  if (startDay === "수") {
    DAY = ["수", "목", "금", "토", "일", "월", "화"];
  }
  if (startDay === "목") {
    DAY = ["목", "금", "토", "일", "월", "화", "수"];
  }
  if (startDay === "금") {
    DAY = ["금", "토", "일", "월", "화", "수", "목"];
  }
  if (startDay === "토") {
    DAY = ["토", "일", "월", "화", "수", "목", "금"];
  }
  if (startDay === "일") {
    DAY = ["일", "월", "화", "수", "목", "금", "토"];
  }

  for (let i = 1; i < calendar.length; i++) {
    let comment = '';
    if (getDay.filter(value => value === i).length > 0) comment = "(휴일)";
    Console.print(`${month}월 ${i}일 ${DAY[(i - 1) % 7]}${comment} ${calendar[i]}`);
  }
}
