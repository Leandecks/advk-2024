import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "l";
const id = "2";
const info = "";
const day = 18;

validateIt(id, letter, info, container, btn, day);
