"use strict";

const doors = document.querySelectorAll(".door-link");
const today = new Date().getDate();
const COLOR = "#c2c7d0";
const BACKGROUND_COLOR = "#161b25";

doors.forEach((door) => {
  if (door.textContent <= today) {
    door.style.color = BACKGROUND_COLOR;
    door.style.backgroundColor = COLOR;
    door.style.borderRadius = "0.5rem";
  } else {
    door.setAttribute("href", "#");
  }
});
