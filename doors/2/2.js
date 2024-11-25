"use strict";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

// CHANGE NAME HERE
const correct = document.getElementById("11");
// CHANGE NAME HERE

const text = document.createElement("p");
text.style.display = "inline-block";
text.style.margin = "0 0 0 1rem";
text.style.color = "white";

const letterEl = document.createElement("button");

// CHANGE LETTER HERE
const letter = "Fr";
// CHANGE LETTER HERE

// CHANGE INFO HERE
const info = `La Francia continentale confina con il Belgio (bestia), la Germania, la Spagna, la Svizzera, il Lussemburgo, l'Italia, Monaco e l'Andorra. La Guiana Francese confina con il Brasile e il Suriname. Saint Martin confina con Sint Maarten che è olandese.`;
// CHANGE INFO HERE

letterEl.style.border = "none";

btn.addEventListener("click", () => {
  if (correct.checked) {
    correct.setAttribute("aria-invalid", "false");
    correct.parentElement.style.background = "#2a7b6f";

    text.textContent = "Risposta corretta!";
    correct.parentElement.appendChild(text);

    letterEl.textContent = `Congrutalulazioni, hai risolto il quiz! ${info} La lettera di oggi è "${letter}"`;
    letterEl.style.backgroundColor = "#2a7b6f";
    container.appendChild(letterEl);
  } else {
    correct.setAttribute("aria-invalid", "true");
    correct.parentElement.style.background = "#964a50";

    text.textContent = "...sarebbe stato corretto!";
    correct.parentElement.appendChild(text);

    letterEl.textContent = `Purtroppo oggi non ce l'hai fatta a risolvere il quiz! ${info} Ricordati che puoi indovinare la parola finale anche senza risolvere ogni singolo quiz...`;
    letterEl.style.backgroundColor = "#964a50";
    container.appendChild(letterEl);
  }
});
