import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "Hy";
const id = "9";
const info = `Deutschland grenzt an die Schweiz, Österreich, Tscheschien, Polen, Dänemark, die Niederlande, Belgien, Luxemburg und Frankreich.`;

validateDe(id, letter, info, container, btn);
