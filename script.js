const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const current_day = daysOfWeek[currentDate.getDay()];
const utc_time = currentDate.toISOString().replace(/\.\d+Z$/, "Z");

const dayEl = document.querySelector("[data-testid=currentDayOfTheWeek]");
const utcEL = document.querySelector("[data-testid=currentUTCTime]");
dayEl.innerHTML = `${current_day}`;
utcEL.innerHTML = `${utc_time}`;
