import React, { FC, useState } from 'react';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout/Layout';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Section from '../components/Section/Section';
import ruLocale from 'date-fns/locale/ru';
import MuiStaticCalendarWrapper from '../components/MuiStaticCalendarWrapper/MuiStaticCalendarWrapper';
import AvailableTimeForDate from '../components/AvailableTimeForDate/AvailableTimeForDate';
import { AvailableTimePeriod } from '../components/AvailableTimeForDate/helpers';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `#454064`,
    flexGrow: 1
  },
  datePicker: {
    width: 460
  }
}));

interface BannerProps {
  onShowAppointmentModal: () => void;
}

const Appointment: FC = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const classes = useStyles();

  const onSelectTime = (timePeriod: AvailableTimePeriod) => {
    console.log('timePeriod', timePeriod);
    setSelectedDates([...selectedDates, timePeriod]);
  };

  return (
    <Layout>
      <Section className={classes.root}>
        <Box display="flex">
          <MuiStaticCalendarWrapper>
            {/*TODO: render selected days differently*/}
            <DatePicker
              disablePast
              className={classes.datePicker}
              orientation="landscape"
              variant="static"
              openTo="date"
              value={date}
              onChange={setDate}
            />
          </MuiStaticCalendarWrapper>

          {date && (
            <AvailableTimeForDate
              selectedDate={date}
              onSelectTime={onSelectTime}
            />
          )}
        </Box>
      </Section>
    </Layout>
  );
};

export default Appointment;
