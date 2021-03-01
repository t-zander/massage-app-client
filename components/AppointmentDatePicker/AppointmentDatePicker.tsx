import React, { FC } from 'react';
import { format, isBefore, isSameDay } from 'date-fns';
import { IconButton, Theme } from '@material-ui/core';
import clsx from 'clsx';
import { DatePicker, DatePickerProps } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import { AvailableTimePeriod } from '../AvailableTimeForDate/helpers';
import MuiStaticCalendarWrapper from '../MuiStaticCalendarWrapper/MuiStaticCalendarWrapper';

const useStyles = makeStyles((theme: Theme) => ({
  datePicker: {
    width: 460
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit'
  },
  currentDay: {
    color: theme.palette.primary.dark
  },
  // day which is clicked on
  selectedDay: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:focus': {
      backgroundColor: theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  // day which was selected for attendance (date and time)
  selectedAttendanceDay: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:focus': {
      backgroundColor: theme.palette.success.main
    },
    '&:hover': {
      backgroundColor: theme.palette.success.main
    }
  },
  anotherMonthDay: {
    color: theme.palette.text.disabled
  },
  pastDay: {}
}));

interface AppointmentDatePickerProps {
  selectedAttendanceDates: AvailableTimePeriod[];
}

const AppointmentDatePicker: FC<
  DatePickerProps & AppointmentDatePickerProps
> = ({ selectedAttendanceDates, ...props }) => {
  const classes = useStyles();

  return (
    <MuiStaticCalendarWrapper>
      <DatePicker
        {...props}
        disablePast
        className={classes.datePicker}
        renderDay={(date, selectedDate, dayInCurrentMonth) => {
          const isCurrent = isSameDay(date, new Date());
          const isSelected = isSameDay(date, selectedDate);
          const isPastDay = isBefore(date, new Date());
          const isSelectedForAttendance = selectedAttendanceDates.find(
            (selectedAttendanceDate) =>
              isSameDay(selectedAttendanceDate.startDateTime, date)
          );
          return (
            <IconButton
              disabled={isPastDay && !isCurrent}
              className={clsx(
                {
                  [classes.currentDay]: isCurrent,
                  [classes.anotherMonthDay]: !dayInCurrentMonth,
                  [classes.selectedAttendanceDay]: isSelectedForAttendance,
                  [classes.selectedDay]: isSelected
                },
                classes.day
              )}
            >
              <span> {format(date, 'd')} </span>
            </IconButton>
          );
        }}
        orientation="landscape"
        variant="static"
        openTo="date"
      />
    </MuiStaticCalendarWrapper>
  );
};

export default AppointmentDatePicker;
