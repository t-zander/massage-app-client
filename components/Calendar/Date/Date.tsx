import React, { FC, memo } from "react";
import { Moment } from "moment";

interface DateProps {
  date: Moment;
  monthClass: string;
  onDateClick: (date: Moment) => void;
}
const Date: FC<DateProps> = ({ date, monthClass, onDateClick }) => {
  const onClick = () => {
    onDateClick(date);
  };

  return (
    <div>
      <button className={monthClass} onClick={onClick}>
        {date.clone().format("DD")}
      </button>
    </div>
  );
};

export default memo(Date);
