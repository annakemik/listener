const button = document.querySelector("#btn");
const insideButton = document.querySelector("#e_btn");
const input = document.querySelector("#text");
const square = document.querySelector("#square");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
let color = "";

const getInputValue = function (event) {
  color = event.target.value;
};

const changeColor = function () {
  square.style.backgroundColor = color.trim().toLocaleLowerCase();
};

const changeCircle = function (event) {
  console.log(event.target.value);
  circle.style.height = event.target.value + "%";
  circle.style.width = event.target.value + "%";
};

input.addEventListener("change", getInputValue);
button.addEventListener("click", changeColor);

insideButton.style.display = "none";

range.addEventListener("input", changeCircle);
range.addEventListener("change", changeCircle);
