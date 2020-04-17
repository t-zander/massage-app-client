import React, { useState, useMemo, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import LeftArrowIcon from "@material-ui/icons/ChevronLeft";
import RightArrowIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import { fade, ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: "30rem",
    backgroundColor: "rgba(36, 33, 50, 0.98)",
    padding: theme.spacing(1)
  },
  today: {
    color: `${theme.palette.primary.main} !important`
  },
  monthName: {
    fontSize: "1.4rem"
  },
  year: {
    fontSize: "1rem",
    color: fade(theme.palette.primary.contrastText, 0.8)
  },
  weekDay: {
    fontWeight: "bold",
    margin: 0
  },
  navButton: {
    color: theme.palette.primary.contrastText
  },
  /* Used for week days and dates */
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center"
  },
  calendarItem: {
    fontSize: "1rem",
    height: "40px",
    width: "40px"
  },
  monthDay: {
    background: "transparent",
    border: "2px solid transparent",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: "50%",
    transition: "border .2s",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      cursor: "pointer",
      border: `2px solid ${theme.palette.primary.contrastText}`
    }
  },
  outOfMonthDay: {
    color: fade(theme.palette.primary.contrastText, 0.3),
    pointerEvents: "none"
  },
  underSelection: {
    border: `2px solid ${theme.palette.primary.contrastText}`
  }
}));

function MonthPagination({ currentDate, goToPrevMonth, goToNextMonth }) {
  const classes = useStyles();

  const currentMonth = useMemo(() => {
    const localeMonthsArray = moment.localeData("ru").months(); // as we need russian name for months
    const currentMonthIndex = currentDate.month();
    const year = currentDate.year();
    return {
      year,
      monthName: localeMonthsArray[currentMonthIndex],
      currentMonthIndex
    };
  }, [currentDate]);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <IconButton className={classes.navButton} onClick={goToPrevMonth}>
        <LeftArrowIcon />
      </IconButton>
      <p className={classes.monthName}>
        {currentMonth.monthName}{" "}
        <span className={classes.year}>({currentMonth.year})</span>
      </p>
      <IconButton className={classes.navButton} onClick={goToNextMonth}>
        <RightArrowIcon />
      </IconButton>
    </Box>
  );
}

function WeekDays() {
  const localLocale = moment();
  localLocale.locale("ru");

  const classes = useStyles();
  return (
    <Box className={classes.calendarGrid}>
      {localLocale
        .localeData()
        .weekdaysMin(true)
        .map(dayName => (
          <p key={dayName} className={clsx(classes.gridItem, classes.weekDay)}>
            {dayName}
          </p>
        ))}
    </Box>
  );
}

/**
 * Date is moment.js date
 *
 * @param {Date} currentDate
 */
function getPrevDays(currentDate) {
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
function getMonthDays(currentDate) {
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
function getNextDays(currentDate) {
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

function Date({ day, monthClass, onDateClick }) {
  const classes = useStyles();

  const onClick = () => {
    onDateClick(day);
  };

  return (
    <div className={classes.gridItem}>
      <button className={monthClass} onClick={onClick}>
        {day.format("DD")}
      </button>
    </div>
  );
}

function Dates({ currentDate, dateUnderSelection, onDateClicked }) {
  const classes = useStyles();

  const monthDays = useMemo(() => {
    return [
      ...getPrevDays(currentDate),
      ...getMonthDays(currentDate),
      ...getNextDays(currentDate)
    ];
  }, [currentDate]);

  const isOutOfMonthDay = day => {
    return day.month() !== currentDate.month();
  };

  const isToday = day => {
    return day.date() === moment().date() && day.month() === moment().month();
  };

  const isUnderSelection = day => {
    return day.isSame(dateUnderSelection);
  };

  return (
    <Box className={classes.calendarGrid}>
      {monthDays.map((day, index) => (
        <Date
          day={day}
          key={index}
          monthClass={clsx(classes.monthDay, classes.calendarItem, {
            [classes.underSelection]: isUnderSelection(day),
            [classes.outOfMonthDay]: isOutOfMonthDay(day),
            [classes.today]: isToday(day)
          })}
          onDateClick={onDateClicked}
        />
      ))}
    </Box>
  );
}

export default function Calendar({ dateUnderSelection, handleDateClicked }) {
  const classes = useStyles();

  const [calendarState, setCalendarState] = useState(() => {
    return { currentDate: moment().locale("uk") };
    //initial value is now
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
      <MonthPagination
        currentDate={calendarState.currentDate}
        goToPrevMonth={handleGoToPrevMonth}
        goToNextMonth={handleGoToNextMonth}
      />
      <Box padding="0 40px">
        <WeekDays />
        <Dates
          dateUnderSelection={dateUnderSelection}
          currentDate={calendarState.currentDate}
          onDateClicked={handleDateClicked}
        />
      </Box>
    </div>
  );
}
