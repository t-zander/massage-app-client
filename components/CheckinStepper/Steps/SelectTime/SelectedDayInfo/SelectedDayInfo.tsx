import React, { FC, useMemo } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Moment } from "moment";

const mockTimes = [
  "08:00 - 09-00",
  "09:30 - 10:30",
  "11:00 - 12:30",
  "13:00 - 14:00"
];

interface SelectedDateInfoProps {
  selectedDate: Moment;
  handleTimeSelected: () => void;
}

const SelectedDateInfo: FC<SelectedDateInfoProps> = ({
  selectedDate,
  handleTimeSelected
}) => {
  const selectedDateFormatted = useMemo(() => {
    return selectedDate.clone().format("dddd, D MMMM");
  }, [selectedDate]);

  const onTimeSelected = () => {
    handleTimeSelected();
  };

  return (
    <div>
      <Typography variant="h5">{selectedDateFormatted}</Typography>
      <Typography variant="h6">Выберите время:</Typography>
      <List component="nav" aria-label="contacts">
        {mockTimes.map((time, index) => {
          return (
            <>
              <ListItem button key={index} dense onClick={onTimeSelected}>
                <ListItemText primary={time} />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
};

export default SelectedDateInfo;
