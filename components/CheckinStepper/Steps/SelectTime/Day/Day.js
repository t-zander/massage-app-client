import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  dateCell: {}
}));

const Day = day => {
  const date = day.getDate();
  console.log("RERENDER");
  return (
    <div>
      <div>{date}</div>
    </div>
  );
};

export default Day;
