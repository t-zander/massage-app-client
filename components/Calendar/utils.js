/**
 * Date is moment.js date
 *
 * @param {Date} currentDate
 */
export function getPrevDays(currentDate) {
  /*
    isoWeekday will make Monday - 1st day
  */
  const firstWeekdayOfMonth =
    currentDate
      .clone()
      .startOf("month")
      .isoWeekday() - 1;
  if (firstWeekdayOfMonth > 0) {
    return [...Array(firstWeekdayOfMonth)]
      .map((_, index) => {
        return currentDate
          .clone()
          .startOf("month")
          .subtract(index + 1, "day");
      })
      .reverse();
  }
  return [];
}

/**
 * Date is moment.js date
 *
 * @param {Date} currentDate
 */
export function getMonthDays(currentDate) {
  return [...Array(currentDate.daysInMonth())].map((_, index) => {
    return currentDate
      .clone()
      .startOf("month")
      .add(index, "day");
  });
}

/**
 * Date is moment.js date
 *
 * @param {Date} currentDate
 */
export function getNextDays(currentDate) {
  const daysToFullWeek =
    7 -
    currentDate
      .clone()
      .endOf("month")
      .isoWeekday();

  return [...Array(daysToFullWeek)].map((_, index) => {
    return currentDate
      .clone()
      .endOf("month")
      .add(index + 1, "day");
  });
}
