import React from "react";
import moment from "moment";
import { Box, makeStyles, Theme } from "@material-ui/core";

const localLocale = moment();
localLocale.locale("ru");

const useStyles = makeStyles((theme: Theme) => ({
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
        .weekdaysMin()
        .map((dayName: string) => (
          <p key={dayName} className={classes.weekDay}>
            {dayName}
          </p>
        ))}
    </Box>
  );
}

export default WeekDays;
