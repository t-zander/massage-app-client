import React, { useState, useMemo, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import LeftArrowIcon from "@material-ui/icons/ChevronLeft";
import RightArrowIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import { fade, ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import WeekDays from "./WeekDays/WeekDays";
import Dates from "./Dates/Dates";
import MonthsPagination from "./MonthsPagintaion/MonthsPagination";

const useStyles = makeStyles(theme => ({
  root: {
    width: "24rem",
    padding: theme.spacing(1)
  }
}));

export default function Calendar({
  selectedDates,
  dateUnderSelection,
  handleDateClicked
}) {
  const classes = useStyles();

  const [calendarState, setCalendarState] = useState(() => {
    return {
      currentDate: moment().locale("ru")
    };
  });

  const handleGoToPrevMonth = () => {
    setCalendarState({
      ...calendarState,
      // moment objects are mutable, so need to clone it for react to detect chanes
      currentDate: calendarState.currentDate.clone().subtract(1, "M")
    });
  };

  const handleGoToNextMonth = () => {
    setCalendarState({
      ...calendarState,
      // moment objects are mutable, so need to clone it for react to detect chanes
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
}
