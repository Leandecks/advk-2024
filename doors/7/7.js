import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "ä";
const id = "3";
const info = "Die Popmusik folgt meist dem Rhytmus tum-ta-tum-ta.";

validateDe(id, letter, info, container, btn, 7);
