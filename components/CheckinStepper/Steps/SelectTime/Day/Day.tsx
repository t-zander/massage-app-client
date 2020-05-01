const Day = (day: Date) => {
  const date = day.getDate();
  console.log("RERENDER");
  return (
    <div>
      <div>{date}</div>
    </div>
  );
};

export default Day;
