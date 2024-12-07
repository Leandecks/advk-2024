import validateDe from "../doors_de";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "[Leerzeichen]";
const id = "3";
const info =
  'Der Satz kann mit "Ich lese dieses Buch zuhause." übersetzt werden. Demnach werden der Nominativ (Я), der Akkusativ (эту книгу) und der Präpositiv (дома) benutzt.';

validateDe(id, letter, info, container, btn, 7);
