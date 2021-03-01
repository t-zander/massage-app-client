import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { AvailableTimePeriod } from '../AvailableTimeForDate/helpers';

interface SelectedAttendanceDateProps {
  selectedAttendanceDate: AvailableTimePeriod;
  onAttendanceItemSelected: Function;
  onCancelAttendance: Function;
}

const SelectedAttendanceDate: FC<SelectedAttendanceDateProps> = ({
  selectedAttendanceDate,
  onAttendanceItemSelected,
  onCancelAttendance
}) => {
  console.log('rerender');
  return (
    <Card
      key={selectedAttendanceDate.id}
      style={{ maxWidth: 250, marginBottom: 12 }}
    >
      <CardActionArea
        onClick={() => onAttendanceItemSelected(selectedAttendanceDate)}
      >
        <CardContent style={{ padding: 16 }}>
          <Typography variant="h6" color="primary">
            {format(selectedAttendanceDate.startDateTime, 'dd MMMM', {
              locale: ru
            })}
          </Typography>
          <Typography>
            {format(selectedAttendanceDate.startDateTime, 'HH:mm')} -
            {format(selectedAttendanceDate.endDateTime, 'HH:mm')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          aria-label="delete attendance day"
          variant="outlined"
          style={{ whiteSpace: 'nowrap' }}
          onClick={() => onCancelAttendance(selectedAttendanceDate)}
        >
          Отменить запись
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(SelectedAttendanceDate);
