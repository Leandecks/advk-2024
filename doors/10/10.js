import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "[Spazio]";
const id = "1";
const info =
  "Il russo forma il futuro con il futuro di essere e non con la parola 'futuro'.";

validateIt(id, letter, info, container, btn, 8);
