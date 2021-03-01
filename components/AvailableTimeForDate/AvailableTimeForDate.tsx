import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  FormHelperText,
  Typography
} from '@material-ui/core';
import { addHours, format } from 'date-fns';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { cardShadow } from '../../customTheme';
import { ru } from 'date-fns/locale';
import { AvailableTimePeriod, getMockAvailableTimes } from './helpers';

interface AvailableTimeForDateProps {
  selectedDate: Date;
  onSelectTime: (selectTimePeriod: AvailableTimePeriod) => void;
}

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
  selectedDate,
  onSelectTime
}) => {
  const classes = useStyles();
  const [availableTimePeriods, setAvailableTimePeriods] = useState([]);

  useEffect(() => {
    setAvailableTimePeriods(getMockAvailableTimes(selectedDate));
  }, [selectedDate]);
  // TODO: Time periods should be calculated on backend based on massage type
  // TODO: time periods should have proper date, not only time
  return (
    <Box marginLeft={2} flexGrow={1}>
      <Typography variant="h5" gutterBottom>
        Доступное время на {format(selectedDate, 'd MMMM', { locale: ru })}:
        <FormHelperText>
          Выберите время, затем выберите следующую дату сеанса
        </FormHelperText>
      </Typography>
      <Box className={classes.timePeriodsContainer}>
        {availableTimePeriods.map((timePeriod, index) => (
          <Card
            key={index}
            className={classes.timePeriodContainer}
            onClick={() => onSelectTime(timePeriod)}
          >
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
