function saveLettersDe(letterArray) {
  localStorage.setItem("foundLettersDe", JSON.stringify(letterArray));
}

function saveLettersIt(letterArray) {
  localStorage.setItem("foundLettersIt", JSON.stringify(letterArray));
}

function getLettersDe() {
  return JSON.parse(localStorage.getItem("foundLettersDe"));
}

function getLettersIt() {
  return JSON.parse(localStorage.getItem("foundLettersIt"));
}

export { saveLettersDe, saveLettersIt, getLettersDe, getLettersIt };
