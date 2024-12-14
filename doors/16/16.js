import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "u";
const id = "3";
const info = "";
const day = 16;

validateIt(id, letter, info, container, btn, day);
