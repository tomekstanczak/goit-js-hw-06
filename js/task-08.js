const loginForm = document.querySelector(".login-form");
const buttonType = document.querySelector("button");
let removalClass = document.querySelector(".removal-class");
const loginInformation = {};

const sendingLogin = function sendLogin(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
  } else {
    loginInformation.email = email;
    loginInformation.password = password;
    console.log(loginInformation);
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
  }
};

loginForm.addEventListener("submit", sendingLogin);
