import {InputView, InputWorkDay} from "./input/InputView.js";
import {setWorkSchedule} from "./utils/setWorkSchedule.js";
import {OutputView} from "./output/OutputView.js";
import {validateWorkDay} from "./utils/validateWorkDay.js";
import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {
    let workDay;
    while(true) {
      try {
        workDay = await InputWorkDay();
        await validateWorkDay(workDay);
      } catch (e) {
        Console.print(e.message);
      }

    }

    const [weekdaysWorker, holidayWorker] = await InputView();
    const [month, startDay, calendar, getDate, getMonthHoliday] = await setWorkSchedule(workDay, weekdaysWorker, holidayWorker);
    await OutputView(month, startDay, calendar, getDate, getMonthHoliday);
  }
}

export default App;
