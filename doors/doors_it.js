function validateIt(
  correctAnswerId,
  dailyLetter,
  dailyInfo,
  containerElement,
  buttonElement,
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

      text.textContent = "Risposta corretta!";
      correct.parentElement.appendChild(text);

      letterEl.textContent = `Congratulazioni, hai risolto il quiz! ${info} La lettera di oggi è "${letter}".`;
      letterEl.style.backgroundColor = "#2a7b6f";
      container.appendChild(letterEl);
    } else {
      correct.parentElement.style.background = "#964a50";

      text.textContent = "...sarebbe stato corretto!";
      correct.parentElement.appendChild(text);

      letterEl.textContent = `Purtroppo oggi non ce l'hai fatta a risolvere il quiz! ${info} Ricordati che puoi indovinare la parola finale anche senza risolvere ogni singolo quiz...`;
      letterEl.style.backgroundColor = "#964a50";

      letterEl.style.backgroundColor = "#964a50";
      container.appendChild(letterEl);
    }
  });
}

export default validateIt;
