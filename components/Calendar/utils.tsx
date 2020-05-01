import { Moment } from "moment";

export function getPrevDays(currentDate: Moment) {
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

export function getMonthDays(currentDate: Moment) {
  return [...Array(currentDate.daysInMonth())].map((_, index) => {
    return currentDate
      .clone()
      .startOf("month")
      .add(index, "day");
  });
}

export function getNextDays(currentDate: Moment) {
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
