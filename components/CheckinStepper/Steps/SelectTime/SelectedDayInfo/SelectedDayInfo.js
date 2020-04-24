import React, { useMemo } from "react";
import { fade, Typography } from "@material-ui/core";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const mockTimes = [
  "08:00 - 09-00",
  "09:30 - 10:30",
  "11:00 - 12:30",
  "13:00 - 14:00"
];

const useStyles = makeStyles(theme => ({}));

function SelectedDateInfo({ selectedDate, handleTimeSelected }) {
  const classes = useStyles();

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
}

export default SelectedDateInfo;
