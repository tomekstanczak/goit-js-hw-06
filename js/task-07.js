const fontSizeInput = document.querySelector("#font-size-control");
const fontSizeOutput = document.querySelector("#text");

const resizing = function resize(event) {
  fontSizeOutput.style.fontSize = event.currentTarget.value + "px";
};

fontSizeInput.addEventListener("input", resizing);
