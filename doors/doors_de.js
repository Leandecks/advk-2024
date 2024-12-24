import { updateLettersDe } from "./foundLetters";

function validateDe(
  correctAnswerId,
  dailyLetter,
  dailyInfo,
  containerElement,
  buttonElement,
  day,
) {
  const container = containerElement;
  const btn = buttonElement;

  const correct = document.getElementById(correctAnswerId);

  const text = document.createElement("p");
  text.style.display = "inline-block";
  text.style.margin = "0 0 0 1rem";
  text.style.color = "white";

  const letterEl = document.createElement("button");
  const letter = dailyLetter;
  const info = dailyInfo;

  letterEl.style.border = "none";

  btn.addEventListener("click", () => {
    if (correct.checked) {
      correct.parentElement.style.background = "#2a7b6f";

      text.textContent = "Richtige Antwort!";
      correct.parentElement.appendChild(text);

      letterEl.textContent = `Herzlichen Glückwunsch, du hast das Rätsel gelöst! ${info} Der heutige Buchstabe ist "${letter}".`;
      letterEl.style.backgroundColor = "#2a7b6f";
      container.appendChild(letterEl);

      updateLettersDe(letter, day);
    } else {
      correct.parentElement.style.background = "#964a50";

      text.textContent = "...wäre korrekt gewesen!";
      correct.parentElement.appendChild(text);

      letterEl.textContent = `Leider konntest du das heutige Rätsel nicht lösen! ${info} Behalte im Kopf dass man das finale Lösungswort auch ohne jeden einzelnen Buchstaben finden kann!`;
      letterEl.style.backgroundColor = "#964a50";
      container.appendChild(letterEl);
    }
  });
}

export default validateDe;
