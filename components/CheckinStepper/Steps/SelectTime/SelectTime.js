import { useTheme } from "@material-ui/core/styles";
import Calendar from "../../../Calendar/Calendar";
import { useState } from "react";
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Chip
} from "@material-ui/core";
import React from "react";
import SelectedDateInfo from "./SelectedDayInfo/SelectedDayInfo";

const SelectTime = ({ selectedDays, handleDateChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [dateUnderSelection, setDateUnderSelection] = useState(null);

  const onDateSelected = date => {
    // fetch available tme for this date
    // show the panel to the right
    date.isSame(dateUnderSelection)
      ? setDateUnderSelection(null)
      : setDateUnderSelection(date);
  };

  const handleTimeSelected = time => {
    setSelectedDates([...selectedDates, dateUnderSelection]);
    setDateUnderSelection(null);
  };

  return (
    <Box display="flex">
      <Calendar
        handleDateClicked={onDateSelected}
        selectedDates={selectedDates}
        dateUnderSelection={dateUnderSelection}
      />
      <div style={{ padding: "1rem" }}>
        {dateUnderSelection ? (
          <SelectedDateInfo
            selectedDate={dateUnderSelection}
            handleTimeSelected={handleTimeSelected}
          />
        ) : (
          <Typography variant="h6">Выберите дату...</Typography>
        )}
      </div>
    </Box>
  );
};

SelectTime.propTypes = {};

export default SelectTime;
