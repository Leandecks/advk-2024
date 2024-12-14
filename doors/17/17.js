import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "l";
const id = "2";
const info = "";
const day = 17;

validateDe(id, letter, info, container, btn, day);
