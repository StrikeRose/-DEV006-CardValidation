import validator from './validator.js';

document.getElementById("submit-btn").addEventListener("click", submitForm);

function submitForm() {
  const elCardNumber = document.getElementById("CardNumber");
  const elCardValidation = document.getElementById("CardValidator");
  const elCardHolder = document.getElementById("CardHolder");
  const elMonth = document.getElementById("month");
  const elYear = document.getElementById("year");
  const elCvv = document.querySelector(".cvv-input");

  let message = "";
  const unmaskedCardNumber = elCardNumber.value.replaceAll(" ", "");

  if (validator.isValid(unmaskedCardNumber)) message = "Tarjeta válida";
  else message = "Tarjeta inválida";

  elCardNumber.value = validator.maskify(unmaskedCardNumber); // apply mask to credit card number
  elCardValidation.textContent = message;

  console.log(unmaskedCardNumber)

  // reset input values
  elCardHolder.value = "";
  elMonth.selectedIndex = 0;
  elYear.selectedIndex = 0;
  elCvv.value = "";
};