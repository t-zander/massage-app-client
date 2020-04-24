import React, { memo } from "react";

function Date({ date, monthClass, onDateClick }) {
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
}

export default memo(Date);
