"use strict";
console.log("JS Started");

const doors = document.querySelectorAll(".door-link");
const today = new Date().getDate();
const COLOR = "#f0f1f3";
const BACKGROUND_COLOR = "#161b25";

doors.forEach((door) => {
  if (door.textContent <= today) {
    door.style.color = BACKGROUND_COLOR;
    door.style.backgroundColor = COLOR;
    door.style.borderRadius = "1rem";
  } else {
    door.setAttribute("href", "#");
  }
});
