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

const mockTimes = [
  "08:00 - 09-00",
  "09:30 - 10:30",
  "11:00 - 12:30",
  "13:00 - 14:00"
];

const SelectedDateInfo = () => {
  const [value, setValue] = useState("back");

  const handleChange = () => {};

  const onSelectTime = time => () => {
    console.log(time);
  };

  return (
    <div>
      <Typography variant="h6" align="left">
        Вид массажа:
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <FormControlLabel
            value="back"
            control={<Radio color="primary" />}
            label="Спина"
          />
          <FormControlLabel
            value="svz"
            control={<Radio color="primary" />}
            label="ШВЗ"
          />
          <FormControlLabel
            value="generalShort"
            control={<Radio color="primary" />}
            label="Общий (60 мин)"
          />
          <FormControlLabel
            value="generalLong"
            control={<Radio color="primary" />}
            label="Общий (90 мин)"
          />
        </RadioGroup>
      </FormControl>

      <Typography variant="h6" align="left">
        Доступное время:
      </Typography>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridColumnGap: "10px",
          gridRowGap: "10px"
        }}
      >
        {mockTimes.map((mockTime, index) => (
          <Chip
            key={index}
            label={mockTime}
            color="primary"
            onClick={onSelectTime(mockTime)}
            disabled={index % 2 !== 0}
          />
        ))}
      </Box>
    </div>
  );
};

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

  return (
    <Box display="flex">
      <Calendar
        handleDateClicked={onDateSelected}
        dateUnderSelection={dateUnderSelection}
      />
      <div style={{ padding: "1rem" }}>
        {dateUnderSelection ? (
          <SelectedDateInfo />
        ) : (
          <Typography variant="h6">Выберите дату...</Typography>
        )}
      </div>
    </Box>
  );
};

SelectTime.propTypes = {};

export default SelectTime;
