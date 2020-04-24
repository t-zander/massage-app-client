import React from "react";
import moment from "moment";
import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const localLocale = moment();
localLocale.locale("ru");

const useStyles = makeStyles(theme => ({
  weekDay: {
    fontWeight: "bold",
    margin: 0
  },
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    marginBottom: theme.spacing(2)
  }
}));

function WeekDays() {
  const classes = useStyles();
  return (
    <Box className={classes.calendarGrid}>
      {localLocale
        .localeData()
        .weekdaysMin(true)
        .map(dayName => (
          <p key={dayName} className={clsx(classes.gridItem, classes.weekDay)}>
            {dayName}
          </p>
        ))}
    </Box>
  );
}

export default WeekDays;
