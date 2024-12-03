import validateDe from "../doors_de";
import img from "../cartesian.png";
import addImage from "../addImage";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "v";
const id = "4";

validateDe(id, letter, "", container, btn, 3);
addImage(btn, container, img);
