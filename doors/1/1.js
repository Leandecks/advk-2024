"use strict";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

// CHANGE NAME HERE
const correct = document.getElementById("9");
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
const info = `Deutschland grenzt an die Schweiz, Österreich, Tscheschien, Polen, Dänemark, die Niederlande, Belgien, Luxemburg und Frankreich.`;
// CHANGE INFO HERE

letterEl.style.border = "none";

btn.addEventListener("click", () => {
  if (correct.checked) {
    correct.setAttribute("aria-invalid", "false");
    correct.parentElement.style.background = "#2a7b6f";

    text.textContent = "Richtige Antwort!";
    correct.parentElement.appendChild(text);

    letterEl.textContent = `Herzlichen Glückwunsch, du hast das Rätsel gelöst! ${info} Der heutige Buchstabe ist "${letter}"`;
    letterEl.style.backgroundColor = "#2a7b6f";
    container.appendChild(letterEl);
  } else {
    correct.setAttribute("aria-invalid", "true");
    correct.parentElement.style.background = "#964a50";

    text.textContent = "...wäre korrekt gewesen!";
    correct.parentElement.appendChild(text);

    letterEl.textContent = `Leider konntest du das heutige Rätsel nicht lösen! ${info} Behalte im Kopf dass man das finale Lösungswort auch ohne jeden einzelnen Buchstaben finden kann!`;
    letterEl.style.backgroundColor = "#964a50";
    container.appendChild(letterEl);
  }
});
