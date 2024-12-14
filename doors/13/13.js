import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "o";
const id = "4";
const info =
  "Python wird für generelle Programmierung benutzt, im Internet vor allem für Serverprozesse. " +
  "Java wird gerne für Anwendungen benutzt. " +
  "Kotlin ist ein modernes Java. " +
  "HTML, CSS und JavaScript sind die 3 Hauptsprachen des Internets.";

validateDe(id, letter, info, container, btn, 13);
