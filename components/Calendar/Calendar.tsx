import React, { FC, useState } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import moment, { Moment } from "moment";
import WeekDays from "./WeekDays/WeekDays";
import Dates from "./Dates/Dates";
import MonthsPagination from "./MonthsPagintaion/MonthsPagination";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "24rem",
    padding: theme.spacing(1)
  }
}));

interface CalendarProps {
  selectedDates: any[];
  dateUnderSelection: Moment;
  handleDateClicked: (date: Moment) => void;
}

const Calendar: FC<CalendarProps> = ({
  selectedDates,
  dateUnderSelection,
  handleDateClicked
}) => {
  const classes = useStyles();

  const [calendarState, setCalendarState] = useState(() => {
    return {
      currentDate: moment().locale("ru")
    };
  });

  const handleGoToPrevMonth = () => {
    setCalendarState({
      ...calendarState,
      // moment objects are mutable, so need to clone it for react to detect changes
      currentDate: calendarState.currentDate.clone().subtract(1, "M")
    });
  };

  const handleGoToNextMonth = () => {
    setCalendarState({
      ...calendarState,
      // moment objects are mutable, so need to clone it for react to detect changes
      currentDate: calendarState.currentDate.clone().add(1, "M")
    });
  };

  return (
    <div className={classes.root}>
      <MonthsPagination
        currentDate={calendarState.currentDate}
        goToPrevMonth={handleGoToPrevMonth}
        goToNextMonth={handleGoToNextMonth}
      />
      <Box>
        <WeekDays />
        <Dates
          selectedDates={selectedDates}
          dateUnderSelection={dateUnderSelection}
          currentDate={calendarState.currentDate}
          onDateClicked={handleDateClicked}
        />
      </Box>
    </div>
  );
};

export default Calendar;
