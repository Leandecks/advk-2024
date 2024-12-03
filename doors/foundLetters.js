import {
  getLettersDe,
  getLettersIt,
  saveLettersDe,
  saveLettersIt,
} from "./saving";

let foundLettersDe = [];
let foundLettersIt = [];

function createEmptyLetters() {
  let array = [];
  for (let i = 0; i < 12; i++) {
    array.push(" ");
  }
  return array;
}

function checkForEmptyArrayDe() {
  if (!getLettersDe()) {
    console.log("Getting new letter set");
    reloadLettersDe(createEmptyLetters());
  } else {
    console.log("Getting old letter set");
    reloadLettersDe(getLettersDe());
  }
}

function checkForEmptyArrayIt() {
  if (!getLettersIt()) {
    console.log("Getting new letter set");
    reloadLettersIt(createEmptyLetters());
  } else {
    console.log("Getting old letter set");
    reloadLettersIt(getLettersDe());
  }
}

function insertElementInArray(index, element, array) {
  array.splice(index, 1, element);
}

function updateLettersDe(letter, day) {
  console.log(foundLettersDe);
  checkForEmptyArrayDe();
  console.log(foundLettersDe);
  insertElementInArray((day - 1) / 2, letter, foundLettersDe);

  console.log(foundLettersDe);
  saveLettersDe(foundLettersDe);
}

function updateLettersIt(letter, day) {
  checkForEmptyArrayIt();
  insertElementInArray(day / 2 - 1, letter, foundLettersIt);
  saveLettersIt(foundLettersIt);
}

function reloadLettersDe(newLetters) {
  foundLettersDe = newLetters;
}

function reloadLettersIt(newLetters) {
  foundLettersIt = newLetters;
}

export {
  updateLettersDe,
  foundLettersDe,
  updateLettersIt,
  foundLettersIt,
  reloadLettersDe,
  reloadLettersIt,
  createEmptyLetters,
};
