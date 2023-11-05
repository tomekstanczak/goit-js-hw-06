function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonActivation = document.querySelector(".change-color");
const colorChangingPlace = document.querySelector(".color");
const bodyColor = document.querySelector("body");

const colorChanging = function change(event) {
  const color = getRandomHexColor();
  colorChangingPlace.textContent = color;
  bodyColor.style.backgroundColor = color;
};

buttonActivation.addEventListener("click", colorChanging);
