import React, { useMemo } from "react";
import moment from "moment";
import { Box, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LeftArrowIcon from "@material-ui/icons/ChevronLeft";
import RightArrowIcon from "@material-ui/icons/ChevronRight";
import { fade } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  monthName: {
    fontSize: "1.4rem"
  },
  year: {
    fontSize: "1rem",
    color: fade(theme.palette.primary.contrastText, 0.8)
  },
  navButton: {
    color: theme.palette.primary.contrastText
  }
}));

function MonthsPagination({ currentDate, goToPrevMonth, goToNextMonth }) {
  const classes = useStyles();

  const currentMonth = useMemo(() => {
    const localeMonthsArray = moment.localeData("ru").months(); // as we need russian name for months
    const currentMonthIndex = currentDate.month();
    const year = currentDate.year();
    return {
      year,
      monthName: localeMonthsArray[currentMonthIndex],
      currentMonthIndex
    };
  }, [currentDate]);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <IconButton className={classes.navButton} onClick={goToPrevMonth}>
        <LeftArrowIcon />
      </IconButton>
      <p className={classes.monthName}>
        {currentMonth.monthName}{" "}
        <span className={classes.year}>({currentMonth.year})</span>
      </p>
      <IconButton className={classes.navButton} onClick={goToNextMonth}>
        <RightArrowIcon />
      </IconButton>
    </Box>
  );
}

export default MonthsPagination;
