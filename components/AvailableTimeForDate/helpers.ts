import { addHours } from 'date-fns';

export const getMockAvailableTimes = () => {
  const today = new Date();
  const startDayTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    9,
    0
  );

  return Array.from(Array(5).keys()).map((_, index) => ({
    id: index + 1,
    startDateTime: addHours(startDayTime, index),
    endDateTime: addHours(startDayTime, index + 1)
  }));
};

export interface AvailableTimePeriod {
  id: number;
  startDateTime: Date;
  endDateTime: Date;
}
