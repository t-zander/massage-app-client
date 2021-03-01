import { addHours } from 'date-fns';

export const getMockAvailableTimes = (date = new Date()) => {
  const startDayTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    9,
    0
  );

  return Array.from(Array(5).keys()).map((_, index) => ({
    id: date.getTime() + index,
    startDateTime: addHours(startDayTime, index),
    endDateTime: addHours(startDayTime, index + 1)
  }));
};

export interface AvailableTimePeriod {
  id: number;
  startDateTime: Date;
  endDateTime: Date;
}
