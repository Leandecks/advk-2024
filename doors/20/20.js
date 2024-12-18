import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "u";
const id = "1";
const info = "Il Decamerone è di Boccaccio.";
const day = 20;

validateIt(id, letter, info, container, btn, day);
