const addButton = document.querySelector(".add");
const inputNumberOne = document.querySelector("#numberOne");
const inputNumberTwo = document.querySelector("#numberTwo");
const finalResult = document.querySelector(".finalResult");

function printFinalResult(result) {
  finalResult.innerText = result;
  removeDataFromForm();
}

addButton.addEventListener("click", function () {
  let convertedValueOne = parseFloat(inputNumberOne.value);
  let convertedValueTwo = parseFloat(inputNumberTwo.value);
  const result = convertedValueOne + convertedValueTwo;
  printFinalResult(result);
});

// SUBTRAÇÃO

const subButton = document.querySelector(".sub");

function subtractionFunction() {
  const subtraction =
    parseFloat(inputNumberOne.value) - parseFloat(inputNumberTwo.value);
  printFinalResult(subtraction);
}

subButton.addEventListener("click", subtractionFunction);

// MULTIPLICAÇÃO

const multButton = document.querySelector('.mult');

multButton.addEventListener('click', function() {
  const mult = Number(inputNumberOne.value) * Number(inputNumberTwo.value);
  printFinalResult(mult);
});

subButton.addEventListener("click", subtractionFunction);

//DIVISÃO

const divButton = document.querySelector('.divis');

divButton.addEventListener('click', function() {
  const div = Number(inputNumberOne.value) / Number(inputNumberTwo.value);
  printFinalResult(div);
});

function removeDataFromForm() {
  document.getElementById("numberOne").value = "";
  document.getElementById("numberTwo").value = "";
  return true;
}

