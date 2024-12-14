import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "u";
const id = "3";
const info = "";
const day = 15;

validateDe(id, letter, info, container, btn, day);
