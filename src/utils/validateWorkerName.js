export async function validateWorkerName(weekdaysWorker, holidayWorker) {
  const weekdaysWorkerArray = weekdaysWorker.split(',');
  const holidayWorkerArray = holidayWorker.split(',');
  const weekdaysWorkerSet = new Set(weekdaysWorkerArray);
  const holidayWorkerSet = new Set(holidayWorkerArray);

  if (weekdaysWorkerArray.length !== weekdaysWorkerSet.size) {
    throw new Error('[ERROR]평일 비상 근무에 중복 닉네임이 있습니다. 다시 작성해주세요.');
  }

  if (holidayWorkerArray.length !== holidayWorkerSet.size) {
    throw new Error('[ERROR]휴일 비상 근무에 중복 닉네임이 있습니다. 다시 작성해주세요.');
  }

  for (let i = 0; i < weekdaysWorkerArray.length; i++) {
    if (weekdaysWorkerArray[i].length > 5) {
      throw new Error('[ERROR]평일 비상 근무 닉네임이 5자리를 초과했습니다. 다시 작성해주세요.');
    }
  }

  for (let i = 0; i < holidayWorkerArray.length; i++) {
    if (holidayWorkerArray[i].length > 5) {
      throw new Error('[ERROR]휴일 비상 근무 닉네임이 5자리를 초과했습니다. 다시 작성해주세요.');
    }
  }

  if (weekdaysWorkerArray.length < 5) {
    throw new Error('[ERROR]평일 비상 근무자가 5명보다 적습니다. 다시 작성해주세요.');
  }

  if (holidayWorkerArray.length < 5) {
    throw new Error('[ERROR]휴일 비상 근무자가 5명보다 적습니다. 다시 작성해주세요.');
  }

  if (weekdaysWorkerArray.length > 35) {
    throw new Error('[ERROR]평일 비상 근무자가 35명보다 많습니다. 다시 작성해주세요.');
  }

  if (holidayWorkerArray.length > 35) {
    throw new Error('[ERROR]휴일 비상 근무자가 35명보다 많습니다. 다시 작성해주세요.');
  }
}