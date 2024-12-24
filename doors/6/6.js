import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "ä";
const id = "2";
const info =
  "Durante un'inspirazione profonda attiviamo anche i muscoli intercostali interni.";

validateIt(id, letter, info, container, btn, 6);
