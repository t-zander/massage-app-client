import React, { FC, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Theme,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout/Layout';
import { DatePicker } from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/CloseOutlined';
import Section from '../components/Section/Section';
import MuiStaticCalendarWrapper from '../components/MuiStaticCalendarWrapper/MuiStaticCalendarWrapper';
import AvailableTimeForDate from '../components/AvailableTimeForDate/AvailableTimeForDate';
import { AvailableTimePeriod } from '../components/AvailableTimeForDate/helpers';
import { format, isBefore, isSameDay } from 'date-fns';
import clsx from 'clsx';
import { ru } from 'date-fns/locale';
import SelectedAttendanceDates from '../components/SelectedAttendanceDates/SelectedAttendanceDates';
import SelectedAttendanceDate from '../components/SelectedAttendanceDates/SelectedAttendanceDate';
import AppointmentDatePicker from '../components/AppointmentDatePicker/AppointmentDatePicker';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `#454064`,
    flexGrow: 1
  }
}));

const Appointment: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [shouldShowTimeOptions, setShouldShowTimeOptions] = useState(true);
  const [selectedAttendanceDates, setSelectedAttendanceDates] = useState<
    AvailableTimePeriod[]
  >([]);

  const classes = useStyles();

  const onSetDate = (date: Date) => {
    setSelectedDate(date);
    /*setShouldShowTimeOptions(
      !isSameDay(date, selectedDate) && !shouldShowTimeOptions
    );*/
  };

  const onSelectTime = (timePeriod: AvailableTimePeriod) => {
    console.log('timePeriod', timePeriod);
    //TODO: sort dates before setting them
    setSelectedAttendanceDates([...selectedAttendanceDates, timePeriod]);
    // setShouldShowTimeOptions(false);
  };

  const onAttendanceItemSelected = useCallback(
    (attendanceItem: AvailableTimePeriod) => {
      setSelectedDate(attendanceItem.startDateTime);
    },
    []
  );

  const onCancelAttendance = useCallback(
    (attendanceItem: AvailableTimePeriod) => {
      setSelectedAttendanceDates(
        selectedAttendanceDates.filter(
          (attendanceDate) => attendanceDate.id !== attendanceItem.id
        )
      );
    },
    [selectedAttendanceDates]
  );

  return (
    <Layout>
      <Section className={classes.root}>
        <Box display="flex">
          <AppointmentDatePicker
            value={selectedDate}
            onChange={onSetDate}
            selectedAttendanceDates={selectedAttendanceDates}
          />

          {selectedDate && (
            <AvailableTimeForDate
              selectedDate={selectedDate}
              onSelectTime={onSelectTime}
            />
          )}
        </Box>

        {selectedAttendanceDates.length > 0 && (
          <SelectedAttendanceDates
            selectedAttendanceDates={selectedAttendanceDates}
            renderSelectedAttendanceDate={(attendanceDate) => (
              <SelectedAttendanceDate
                key={attendanceDate.id}
                selectedAttendanceDate={attendanceDate}
                onAttendanceItemSelected={onAttendanceItemSelected}
                onCancelAttendance={onCancelAttendance}
              />
            )}
          />
        )}
      </Section>
    </Layout>
  );
};

export default Appointment;
