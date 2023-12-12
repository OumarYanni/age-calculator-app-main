const form = document.querySelector("#age-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isDayValid = isDayInputValid();
  const isMonthValid = isMonthInputValid();
  const isYearValid = isYearInputValid();
  if (isDayValid && isMonthValid && isYearValid) {
    submitForm();
  }
});

// Next step : comment créer des petites fonctions réutilisables
// Essayer de créer une fonction spécialisée par input notamment day, month et year
// Chaque fonction retournera deux éléments (booléen et string)
// Commmencer par finaliser la fonction isDayInputValid()

let dayErrorElement = document.querySelector("#day-error");
dayErrorElement.textContent = "";

const dayInputElement = document.querySelector("#day-input");
const dayInputValue = parseInt(dayInputElement.value, 10);

function isDayInputValid() {
  if (dayInputElement.value.trim() === "") {
    dayErrorElement.textContent = "This field is required";

    return false;
  }

  const isDayValid = dayInputValue >= 1 && dayInputValue <= 31;
  if (!isDayValid) {
    dayErrorElement.textContent = "Must be a valid day";
  }

  return isDayValid;
}

let monthErrorElement = document.querySelector("#month-error");
monthErrorElement.textContent = "";

const monthInputElement = document.querySelector("#month-input");
const monthInputValue = parseInt(monthInputElement.value, 10) - 1;

function isMonthInputValid(yearInputValue, dayInputValue) {
  if (monthInputElement.value.trim() === "") {
    monthErrorElement.textContent = "This field is required";

    return false;
  }

  const isMonthValid = monthInputValue >= 0 && monthInputValue <= 11;

  if (!isMonthValid) {
    monthErrorElement.textContent = "Must be a valid month";

    return false;
  }

  const daysInMonth = new Date(
    yearInputValue,
    monthInputValue + 1,
    0
  ).getDate();

  const isDaysInMonthValid = dayInputValue <= daysInMonth;

  if (!isDaysInMonthValid) {
    dayErrorElement.textContent = "Must be a valid day";

    return false;
  }

  return true;
}

let yearErrorElement = document.querySelector("#year-error");
yearErrorElement.textContent = "";

const yearInputElement = document.querySelector("#year-input");
const yearInputValue = parseInt(yearInputElement.value, 10);

function isYearInputValid(monthInputValue, dayInputValue) {
  if (yearInputElement.value.trim() === "") {
    yearErrorElement.textContent = "This field is required";

    return false;
  }

  let currentDate = new Date();
  let dateToBeVerified = new Date(
    yearInputValue,
    monthInputValue,
    dayInputValue
  );
  const isDateInTheFuture = dateToBeVerified > currentDate;

  if (isDateInTheFuture) {
    yearErrorElement.textContent = "Must be in the past";

    return true;
  }

  return true;
}

function submitForm() {
  //form.submit();
  console.log("formulaire soumis !");
}
