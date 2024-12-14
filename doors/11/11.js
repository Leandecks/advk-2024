import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "J";
const id = "4";
const info = "Nichts kann den Block aufhalten, wenn es keine Reibung gibt.";

validateDe(id, letter, info, container, btn, 11);
