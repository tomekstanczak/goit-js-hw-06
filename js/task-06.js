const inputObject = document.querySelector("#validation-input");
let borderColors = document.querySelector("#validation-input");

function countingLetters(event) {
  if (
    event.currentTarget.value.length <
      inputObject.getAttribute("data-length") ||
    event.currentTarget.value.length > inputObject.getAttribute("data-length")
  ) {
    borderColors.classList.remove("valid");
    borderColors.classList.add("invalid");
  } else {
    borderColors.classList.remove("invalid");
    borderColors.classList.add("valid");
  }
}

inputObject.addEventListener("blur", countingLetters);
