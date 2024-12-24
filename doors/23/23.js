import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "!";
const id = "4";
const info =
  "'Hauska viikonloppua' bedeutet 'Schönes Wochenende'. " +
  "'Hyvää päivää' bedeutet 'Guten Tag'. " +
  "'Paljon onnea' bedeutet 'Herzlichen Glückwunsch'. ";
const day = 23;

validateDe(id, letter, info, container, btn, day);
