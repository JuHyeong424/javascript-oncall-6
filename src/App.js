import {InputView} from "./input/InputView.js";

class App {
  async run() {
    const [workDay, weekdaysWorker, holidayWorker] = await InputView();

  }
}

export default App;
