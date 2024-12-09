import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "J";
const id = "4";
const info = "Il blocco non ha ostacoli se non ci sono attriti.";

validateIt(id, letter, info, container, btn, 8);
