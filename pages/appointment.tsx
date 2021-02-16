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
  const classes = useStyles();

  return (
    <Layout>
      <Section className={classes.root}>
        <Box display="flex">
          <MuiStaticCalendarWrapper>
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

          {date && <AvailableTimeForDate selectedDate={date} />}
        </Box>
      </Section>
    </Layout>
  );
};

export default Appointment;
