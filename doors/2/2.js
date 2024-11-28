import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "Hy";
const id = "11";
const info = `La Francia continentale confina con il Belgio (bestia), la Germania, la Spagna, la Svizzera, il Lussemburgo, l'Italia, Monaco e l'Andorra. La Guiana Francese confina con il Brasile e il Suriname. Saint Martin confina con Sint Maarten che è olandese.`;

validateIt(id, letter, info, container, btn);
