import classes from '*.module.css';
import { Box, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import AppointmentDatePicker from '../../AppointmentDatePicker/AppointmentDatePicker';
import AvailableTimeForDate from '../../AvailableTimeForDate/AvailableTimeForDate';
import { AvailableTimePeriod } from '../../AvailableTimeForDate/helpers';
import Section from '../../Section/Section';
import SelectedAttendanceDate from '../../SelectedAttendanceDates/SelectedAttendanceDate';
import SelectedAttendanceDates from '../../SelectedAttendanceDates/SelectedAttendanceDates';

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `#454064`,
    flexGrow: 1
  }
}));

const DatesSelection = (props: Props) => {
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
    <>
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
    </>
  );
};

export default DatesSelection;
