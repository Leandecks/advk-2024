import validateDe from "../doors_de";
import img from "./cartesian.png";

const container = document.querySelector(".container");
const btn = document.getElementById("button");

const letter = "v";
const id = "4";

validateDe(id, letter, "", container, btn);

btn.addEventListener("click", () => {
  if (document.querySelector("#cartesian")) {
    document.querySelector("#cartesian").remove();
  }
  const image = document.createElement("img");
  image.id = "cartesian";
  image.src = img;
  image.style.marginTop = "0.5rem";
  container.appendChild(image);
});
