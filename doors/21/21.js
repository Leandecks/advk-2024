import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "a";
const id = "2";
const info = "";
const day = 21;

validateDe(id, letter, info, container, btn, day);
