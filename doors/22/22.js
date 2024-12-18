import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "a";
const id = "2";
const info = "";
const day = 22;

validateIt(id, letter, info, container, btn, day);
