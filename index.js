// import { getLettersDe, getLettersIt } from "./doors/saving";
//
// document.addEventListener("DOMContentLoaded", () => {
//   displayFoundLetters();
//   colorDoors();
// });
//
// function displayFoundLetters() {
//   const displayDe = document.querySelector(".found-letters-de");
//   const displayIt = document.querySelector(".found-letters-it");
//
//   let arrayDe = getLettersDe();
//   let arrayIt = getLettersIt();
//
//   if (!arrayDe) {
//     arrayDe = ["Noch keine Buchstaben!"];
//   }
//   if (!arrayIt) {
//     arrayIt = ["Ancora nessuna lettera!"];
//   }
//
//   displayDe.textContent = formatLetterArray(arrayDe);
//   displayIt.textContent = formatLetterArray(arrayIt);
// }
//
// function formatLetterArray(array) {
//   let string = "";
//   for (let i = 0; i < [...array].length; i++) {
//     if (array[i] === " ") {
//       string += "_" + " ";
//     } else {
//       string += array[i] + " ";
//     }
//   }
//   return string;
// }
//
// function colorDoors() {
//   const doors = document.querySelectorAll(".door-link");
//   const today = new Date().getDate();
//   const COLOR = "#c2c7d0";
//   const BACKGROUND_COLOR = "#161b25";
//
//   doors.forEach((door) => {
//     if (door.textContent <= today) {
//       door.style.color = BACKGROUND_COLOR;
//       door.style.backgroundColor = COLOR;
//       door.style.borderRadius = "0.5rem";
//     } else {
//       door.setAttribute("href", "#");
//     }
//   });
// }
