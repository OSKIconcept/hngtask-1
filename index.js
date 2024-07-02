"use strict";

const day = document.getElementById("day");
const time = document.getElementById("time");

//for time in UTC
setInterval(() => {
  const today = new Date();
  const currentTime = today.toUTCString().slice(17, 25);
  time.textContent = `Time(UTC): ${currentTime}`;
}, 100);

// For day
const date = new Date();
const currentDay = date.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.textContent = `Day: ${days[currentDay]}`;
