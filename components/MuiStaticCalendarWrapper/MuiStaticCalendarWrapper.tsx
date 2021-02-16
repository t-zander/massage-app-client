import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

interface MuiPickerWrapperProps {}

const MuiStaticCalendarWrapper: FC = ({ children }) => {
  return (
    <Box maxWidth={460}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        {children}
      </MuiPickersUtilsProvider>
    </Box>
  );
};

export default MuiStaticCalendarWrapper;
