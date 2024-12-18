import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "!";
const id = "4";
const info =
  "'Hauska viikonloppua' significa 'Buon finesettimana'. " +
  "'Hyvää päivää' significa 'Buongiorno'. " +
  "'Paljon onnea' significa 'Tante congratulazioni'. ";
const day = 24;

validateIt(id, letter, info, container, btn, day);
