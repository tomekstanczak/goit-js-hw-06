const numberValue = document.querySelector("#value");

let counterValue = 0;

const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

numberValue.textContent = `${counterValue}`;

buttonMinus.addEventListener("click", () => {
  counterValue--;
  numberValue.textContent = `${counterValue}`;
  console.log(counterValue);
});

buttonPlus.addEventListener("click", () => {
  counterValue++;
  numberValue.textContent = `${counterValue}`;
  console.log(counterValue);
});
