function addImage(buttonElement, containerElement, imageSrc) {
  buttonElement.addEventListener("click", () => {
    if (document.querySelector("#image")) {
      document.querySelector("#image").remove();
    }
    const image = document.createElement("img");
    image.style.display = "block";
    image.id = "image";
    image.src = imageSrc;
    image.style.marginTop = "0.5rem";
    containerElement.appendChild(image);
  });
}

export default addImage;
