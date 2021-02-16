import React, { FC, useState } from 'react';
import { Box, Card, CardContent } from '@material-ui/core';
import { addHours, format } from 'date-fns';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { cardShadow } from '../../customTheme';

interface AvailableTimeForDateProps {
  selectedDate: Date;
}

const getMockAvailableTimes = () => {
  const today = new Date();
  const startDayTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDay(),
    9,
    0
  );

  return Array.from(Array(5).keys()).map((_, index) => ({
    _id: index,
    startDateTime: addHours(startDayTime, index),
    endDateTime: addHours(startDayTime, index + 1)
  }));
};

const useStyles = makeStyles((theme: Theme) => ({
  timePeriodsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    columnGap: theme.typography.pxToRem(12),
    rowGap: theme.typography.pxToRem(16)
  },
  timePeriodContainer: {
    textAlign: 'center',
    boxShadow: 'none',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: cardShadow
    }
  }
}));

const AvailableTimeForDate: FC<AvailableTimeForDateProps> = ({
  selectedDate
}) => {
  const classes = useStyles();
  const [availableTimePeriods, setAvailableTimePeriods] = useState(
    getMockAvailableTimes
  );

  return (
    <Box marginLeft={2} flexGrow={1}>
      <h2>{selectedDate.toDateString()}</h2>
      <Box className={classes.timePeriodsContainer}>
        {availableTimePeriods.map((timePeriod, index) => (
          <Card key={index} className={classes.timePeriodContainer}>
            <CardContent style={{ padding: 16 }}>
              {format(timePeriod.startDateTime, 'HH:mm')} -
              {format(timePeriod.endDateTime, 'HH:mm')}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AvailableTimeForDate;
