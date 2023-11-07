export const getCurrentDate = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${dayOfWeek}, ${day}.${month}.${year}`;

  return formattedDate;
};
