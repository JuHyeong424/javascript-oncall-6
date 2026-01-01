const validDays = ['월', '화', '수', '목', '금', '토', '일'];

export async function validateWorkDay(workDay) {
  const [month, day] = workDay.split(',');

  if (!month || !day) {
    throw new Error('[ERROR]월,요일 형태가 아닙니다. 다시 작성해주세요.');
  }

  if (Number(month) < 1 || Number(month) > 12 || !Number.isInteger(Number(month))) {
    throw new Error('[ERROR]옳은 달이 아닙니다. 다시 작성헤주세요.');
  }

  if (!validDays.includes(day)) {
    throw new Error('[ERROR]옳은 요일이 아닙니다. 다시 작성해주세요.');
  }
}