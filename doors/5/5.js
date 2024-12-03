import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "ä";
const id = "2";
const info =
  "Bei der tiefen Ausatmung wird zusätzlich die Muskelgruppe der Musculus intercostalis externus aktiviert.";

validateDe(id, letter, info, container, btn, 5);
