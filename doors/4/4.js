import validateIt from "../doors_it";
import img from "../cartesian.png";
import addImage from "../addImage";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "v";
const id = "4";

validateIt(id, letter, "", container, btn);
addImage(btn, container, img);
