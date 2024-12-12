import validateIt from "../doors_it";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "o";
const id = "4";
const info =
  "Python viene utilizzato per programmazione generale. " +
  "Java è un'isola (quando non è un'isola viene utilizzato per sviluppare programmi e applicazioni). " +
  "Kotlin è Java moderno (non l'isola). " +
  "HTML, CSS e JavaScript vengono utilizzati per sviluppare in internet.";

validateIt(id, letter, info, container, btn, 8);
