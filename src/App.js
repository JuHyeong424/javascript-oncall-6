import {InputWorkDay, InputWorkerName} from "./input/InputView.js";
import {setWorkSchedule} from "./utils/setWorkSchedule.js";
import {OutputView} from "./output/OutputView.js";
import {validateWorkDay} from "./utils/validateWorkDay.js";
import {Console} from "@woowacourse/mission-utils";
import {validateWorkerName} from "./utils/validateWorkerName.js";

class App {
  async run() {
    let workDay;
    while(true) {
      try {
        workDay = await InputWorkDay();
        await validateWorkDay(workDay);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    let weekdaysWorker, holidayWorker;
    while (true) {
      try {
        [weekdaysWorker, holidayWorker] = await InputWorkerName();
        await validateWorkerName(weekdaysWorker, holidayWorker);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    const [month, startDay, calendar, getDate, getMonthHoliday] = await setWorkSchedule(workDay, weekdaysWorker, holidayWorker);
    await OutputView(month, startDay, calendar, getDate, getMonthHoliday);
  }
}

export default App;
