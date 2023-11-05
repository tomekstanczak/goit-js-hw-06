function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxPlace = document.querySelector("#boxes");
let inputNumber = document.querySelector("input");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  let amount = inputNumber.value;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.classList.add("removal-class");
    box.style.margin = "5px";
    box.style.width = `${i * 10 + 20}px`;
    box.style.height = `${i * 10 + 20}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxPlace.appendChild(box);
  }
}

function destroyBoxes() {
  let destroied = document.querySelectorAll(".removal-class");
  if (destroied === null) {
  } else {
    destroied.forEach(function removeAll(allBoxes) {
      allBoxes.remove();
    });
  }
}
