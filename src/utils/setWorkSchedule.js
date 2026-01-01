import {HOLIDAY} from "../data/holiday.js";

export async function setWorkSchedule(workDay, weekdaysWorker, holidayWorker) {
  const [month, startDay] = workDay.split(',');
  const weekdaysWorkerArray = weekdaysWorker.split(',');
  const holidayWorkerArray = holidayWorker.split(',');

  let calendar = [];
  calendar[0] = -1;

  const getMonthHoliday = HOLIDAY.filter(value => value.month === Number(month));

  let getDate = [];
  let done;
  let rotateCount;

  // 시작 요일에 맞추어서 첫 주 배열 함수
  switch (startDay) {
    case "월":
      for (let i = 0; i < 5; i++) {
        // 공휴일
        if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
          calendar[i + 1] = holidayWorkerArray[0];
          getDate[i + 1] = "H";

          let rotateCount = 1;
          while (true) {
            if (calendar[i] !== calendar[i + 1]) break;
            let a = holidayWorkerArray[0];
            holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
            holidayWorkerArray[rotateCount] = a;
            rotateCount++;
            calendar[i + 1] = holidayWorkerArray[0];
          }

          const shifted = holidayWorkerArray.shift();
          holidayWorkerArray.push(shifted);
          continue;
        }
        // 평일
        calendar[i + 1] = weekdaysWorkerArray[0];
        getDate[i + 1] = "W";

        rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = weekdaysWorkerArray[0];
          weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
          weekdaysWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = weekdaysWorkerArray[0];
        }

        const shifted = weekdaysWorkerArray.shift();
        weekdaysWorkerArray.push(shifted);
      }
      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];

      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      const shifted = holidayWorkerArray.shift();
      holidayWorkerArray.push(shifted);
      break;
    case "화":
      for (let i = 0; i < 4; i++) {
        // 공휴일
        if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
          calendar[i + 1] = holidayWorkerArray[0];
          getDate[i + 1] = "H";

          let rotateCount = 1;
          while (true) {
            if (calendar[i] !== calendar[i + 1]) break;
            let a = holidayWorkerArray[0];
            holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
            holidayWorkerArray[rotateCount] = a;
            rotateCount++;
            calendar[i + 1] = holidayWorkerArray[0];
          }

          const shifted = holidayWorkerArray.shift();
          holidayWorkerArray.push(shifted);
          continue;
        }
        // 평일
        calendar[i + 1] = weekdaysWorkerArray[0];
        getDate[i + 1] = "W";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = weekdaysWorkerArray[0];
          weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
          weekdaysWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = weekdaysWorkerArray[0];
        }

        done = weekdaysWorkerArray.shift();
        weekdaysWorkerArray.push(done);
      }
      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];

      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
    case "수":
      for (let i = 0; i < 3; i++) {
        // 공휴일
        if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
          calendar[i + 1] = holidayWorkerArray[0];
          getDate[i + 1] = "H";

          let rotateCount = 1;
          while (true) {
            if (calendar[i] !== calendar[i + 1]) break;
            let a = holidayWorkerArray[0];
            holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
            holidayWorkerArray[rotateCount] = a;
            rotateCount++;
            calendar[i + 1] = holidayWorkerArray[0];
          }

          const shifted = holidayWorkerArray.shift();
          holidayWorkerArray.push(shifted);
          continue;
        }
        // 평일
        calendar[i + 1] = weekdaysWorkerArray[0];
        getDate[i + 1] = "W";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = weekdaysWorkerArray[0];
          weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
          weekdaysWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = weekdaysWorkerArray[0];
        }

        done = weekdaysWorkerArray.shift();
        weekdaysWorkerArray.push(done);
      }
      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];

      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
    case "목":
      for (let i = 0; i < 2; i++) {
        // 공휴일
        if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
          calendar[i + 1] = holidayWorkerArray[0];
          getDate[i + 1] = "H";

          let rotateCount = 1;
          while (true) {
            if (calendar[i] !== calendar[i + 1]) break;
            let a = holidayWorkerArray[0];
            holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
            holidayWorkerArray[rotateCount] = a;
            rotateCount++;
            calendar[i + 1] = holidayWorkerArray[0];
          }

          const shifted = holidayWorkerArray.shift();
          holidayWorkerArray.push(shifted);
          continue;
        }
        // 평일
        calendar[i + 1] = weekdaysWorkerArray[0];
        getDate[i + 1] = "W";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = weekdaysWorkerArray[0];
          weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
          weekdaysWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = weekdaysWorkerArray[0];
        }

        done = weekdaysWorkerArray.shift();
        weekdaysWorkerArray.push(done);
      }
      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
    case "금":
      // 공휴일
      if (getMonthHoliday.filter(value => value.day === 1).length > 0) {
        calendar[1] = holidayWorkerArray[0];
        getDate[1] = "H";
        const shifted = holidayWorkerArray.shift();
        holidayWorkerArray.push(shifted);
      }
      // 평일
      calendar[1] = weekdaysWorkerArray[0];
      getDate[1] = "W";
      done = weekdaysWorkerArray.shift();
      weekdaysWorkerArray.push(done);

      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
    case "토":
      // 주말 2번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";
      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);

      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";

      rotateCount = 1;
      while (true) {
        if (calendar[calendar.length - 1] !== calendar[calendar.length]) break;
        let a = holidayWorkerArray[0];
        holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
        holidayWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[calendar.length] = holidayWorkerArray[0];
      }

      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
    case "일":
      // 주말 1번
      calendar[calendar.length] = holidayWorkerArray[0];
      getDate[getDate.length] = "H";
      done = holidayWorkerArray.shift();
      holidayWorkerArray.push(done);
      break;
  }

  // 전체 근무 배치
  if (Number(month) !== 2) {
    let count = 0;
    for (let i = calendar.length - 1; i < 31; i++) {
      count += 1;

      // 공휴일
      if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        continue;
      }

      // 토요일
      if (count === 6) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        continue;
      }

      // 일요일
      if (count === 7) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        count = 0;
        continue;
      }
      // 평일
      calendar[i + 1] = weekdaysWorkerArray[0];
      getDate[i + 1] = "W";

      let rotateCount = 1;
      while (true) {
        if (calendar[i] !== calendar[i + 1]) break;
        let a = weekdaysWorkerArray[0];
        weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
        weekdaysWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[i + 1] = weekdaysWorkerArray[0];
      }

      done = weekdaysWorkerArray.shift();
      weekdaysWorkerArray.push(done);
    }
  }

  // 2월
  if (Number(month) === 2) {
    let count = 0;
    for (let i = calendar.length - 1; i < 28; i++) {
      count += 1;

      // 공휴일
      if (getMonthHoliday.filter(value => value.day === i + 1).length > 0) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        continue;
      }

      // 토요일
      if (count === 6) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        continue;
      }

      // 일요일
      if (count === 7) {
        calendar[i + 1] = holidayWorkerArray[0];
        getDate[i + 1] = "H";

        let rotateCount = 1;
        while (true) {
          if (calendar[i] !== calendar[i + 1]) break;
          let a = holidayWorkerArray[0];
          holidayWorkerArray[0] = holidayWorkerArray[rotateCount];
          holidayWorkerArray[rotateCount] = a;
          rotateCount++;
          calendar[i + 1] = holidayWorkerArray[0];
        }

        done = holidayWorkerArray.shift();
        holidayWorkerArray.push(done);
        count = 0;
        continue;
      }
      // 평일
      calendar[i + 1] = weekdaysWorkerArray[0];
      getDate[i + 1] = "W";

      let rotateCount = 1;
      while (true) {
        if (calendar[i] !== calendar[i + 1]) break;
        let a = weekdaysWorkerArray[0];
        weekdaysWorkerArray[0] = weekdaysWorkerArray[rotateCount];
        weekdaysWorkerArray[rotateCount] = a;
        rotateCount++;
        calendar[i + 1] = weekdaysWorkerArray[0];
      }

      done = weekdaysWorkerArray.shift();
      weekdaysWorkerArray.push(done);
    }
  }

  return [month, startDay, calendar, getDate, getMonthHoliday];
}