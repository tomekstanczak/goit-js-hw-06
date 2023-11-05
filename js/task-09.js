function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonActivation = document.querySelector(".change-color");
const colorChangingPlace = document.querySelector(".color");

const colorChanging = function change(event) {
  colorChangingPlace.style.backgroundColor = getRandomHexColor();
};

buttonActivation.addEventListener("click", colorChanging);
