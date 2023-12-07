const form = document.querySelector("#age-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isValidInput()) {
    submitForm();
  }
});

function isValidInput() {
  let dayErrorElement = document.querySelector("#day-error");
  dayErrorElement.textContent = "";

  let isValid = true;
  const dayInputElement = document.querySelector("#day-input");
  const dayInputValue = dayInputElement.value;

  if (!dayInputValue) {
    dayErrorElement.textContent = "this field is required";
    isValid = false;
  }

  return isValid;
}

// let dayErrorElement = document.querySelector("#day-error");
// dayErrorElement = dayErrorElement.textContent = "123";

// console.log(dayErrorElement);

function submitForm() {
  //form.submit();
  console.log("formulaire soumis !");
}
