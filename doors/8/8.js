import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "ä";
const id = "3";
const info =
  "La musica leggera nella grande maggioranza dei casi segue il ritmo tum-ta-tum-ta.";

validateIt(id, letter, info, container, btn);
