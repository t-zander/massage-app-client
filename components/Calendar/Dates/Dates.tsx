import React, { FC, useCallback, useMemo } from "react";
import moment, { Moment } from "moment";
import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import Date from "../Date/Date";
import { fade } from "@material-ui/core/styles";
import { getMonthDays, getNextDays, getPrevDays } from "../utils";

const useStyles = makeStyles((theme: Theme) => ({
  today: {
    color: `${theme.palette.primary.main} !important`
  },
  /* Used for week days and dates */
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    marginBottom: theme.spacing(2)
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
  },
  isInRange: {
    background: theme.palette.primary.light
  }
}));

interface DatesProps {
  selectedDates: any[];
  currentDate: Moment;
  dateUnderSelection: Moment;
  onDateClicked: (date: Moment) => void;
}

const Dates: FC<DatesProps> = ({
  selectedDates,
  currentDate,
  dateUnderSelection,
  onDateClicked
}) => {
  const classes = useStyles();

  const monthDays = useMemo(() => {
    return [
      ...getPrevDays(currentDate),
      ...getMonthDays(currentDate),
      ...getNextDays(currentDate)
    ];
  }, [currentDate]);

  const isOutOfMonthDay = (day: Moment) => {
    return day.month() !== currentDate.month();
  };

  const isToday = (day: Moment) => {
    return day.date() === moment().date() && day.month() === moment().month();
  };

  const isUnderSelection = (day: Moment) => {
    return day.isSame(dateUnderSelection);
  };

  const isInSelectionRange = useCallback(
    date => {
      if (selectedDates.length === 0) return;
      return !!selectedDates.find(
        selectedDate =>
          selectedDate.clone().date() === date.clone().date() &&
          selectedDate.clone().month() === date.clone().month()
      );
    },
    [selectedDates]
  );
  return (
    <Box className={classes.calendarGrid}>
      {monthDays.map((date, index) => (
        <Date
          date={date}
          key={index}
          monthClass={clsx(classes.monthDay, classes.calendarItem, {
            [classes.underSelection]: isUnderSelection(date),
            [classes.isInRange]: isInSelectionRange(date),
            [classes.outOfMonthDay]: isOutOfMonthDay(date),
            [classes.today]: isToday(date)
          })}
          onDateClick={onDateClicked}
        />
      ))}
    </Box>
  );
};

export default Dates;
