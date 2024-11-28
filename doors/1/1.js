import validate from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "Fr";
const id = "9";
const info = `Deutschland grenzt an die Schweiz, Österreich, Tscheschien, Polen, Dänemark, die Niederlande, Belgien, Luxemburg und Frankreich.`;

validate(id, letter, info, container, btn);
