import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import { AvailableTimePeriod } from '../AvailableTimeForDate/helpers';

interface SelectedAttendanceDatesProps {
  selectedAttendanceDates: AvailableTimePeriod[];
  renderSelectedAttendanceDate: (
    attendanceDate: AvailableTimePeriod,
    index: number
  ) => ReactElement;
}

const SelectedAttendanceDates: FC<SelectedAttendanceDatesProps> = ({
  selectedAttendanceDates,
  renderSelectedAttendanceDate
}) => {
  return (
    <Box marginY={2}>
      <Typography variant="h5" gutterBottom>
        Выбранные сеансы ({selectedAttendanceDates.length} шт.):
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        gridColumnGap="16px"
        gridRowGap="16px"
      >
        {selectedAttendanceDates.map(renderSelectedAttendanceDate)}
      </Box>
      <pre>{JSON.stringify(selectedAttendanceDates, null, 2)}</pre>
    </Box>
  );
};

export default SelectedAttendanceDates;
