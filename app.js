const form = document.querySelector("#age-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isInputValid()) {
    submitForm();
  }
});

// Next step : comment créer des petites fonctions réutilisables
// Essayer de créer une fonction spécialisée par input notamment day, month et year
// Chaque fonction retournera deux éléments (booléen et string)
// Commmencer par finaliser la fonction isDayInputValid()

function isInputValid() {
  let dayErrorElement = document.querySelector("#day-error");
  let monthErrorElement = document.querySelector("#month-error");
  let yearErrorElement = document.querySelector("#year-error");

  dayErrorElement.textContent = "";
  monthErrorElement.textContent = "";
  yearErrorElement.textContent = "";

  const dayInputElement = document.querySelector("#day-input");
  const dayInputValue = parseInt(dayInputElement.value, 10);
  const isDayValid = dayInputValue >= 1 && dayInputValue <= 31;

  const monthInputElement = document.querySelector("#month-input");
  const monthInputValue = parseInt(monthInputElement.value, 10) - 1;
  const isMonthValid = monthInputValue >= 0 && monthInputValue <= 11;

  const yearInputElement = document.querySelector("#year-input");
  const yearInputValue = parseInt(yearInputElement.value, 10);

  const isAnyFieldEmpty =
    dayInputElement.value.trim() === "" ||
    monthInputElement.value.trim() === "" ||
    yearInputElement.value.trim() === "";

  if (isAnyFieldEmpty) {
    if (dayInputElement.value.trim() === "") {
      dayErrorElement.textContent = "This field is required";
    }

    if (monthInputElement.value.trim() === "") {
      monthErrorElement.textContent = "This field is required";
    }

    if (yearInputElement.value.trim() === "") {
      yearErrorElement.textContent = "This field is required";
    }
  } else {
    let currentDate = new Date();
    let dateToBeVerified = new Date(
      yearInputValue,
      monthInputValue,
      dayInputValue
    );
    const isDateInTheFuture = dateToBeVerified > currentDate;

    const daysInMonth = new Date(
      yearInputValue,
      monthInputValue + 1,
      0
    ).getDate();
    const isDaysInMonthValid = dayInputValue <= daysInMonth;

    // console.log(isDayValid);
    // console.log(isMonthValid);
    // console.log(isDateInTheFuture);
    // console.log(isDaysInMonthValid);

    if (!isDayValid) {
      dayErrorElement.textContent = "Must be a valid day";
    }

    if (!isMonthValid) {
      monthErrorElement.textContent = "Must be a valid month";
    }

    if (isDateInTheFuture) {
      yearErrorElement.textContent = "Must be in the past";
    }

    if (!isDaysInMonthValid) {
      dayErrorElement.textContent = "Must be a valid day";
    }
  }

  /*// Ce n'est pas valide
  if (!dayInputValue || !monthInputValue || !yearInputValue) {
    console.log("===");
  } else {
    // C'est valide
  }*/

  //   let dayErrorElement = document.querySelector("#day-error");
  //   dayErrorElement.textContent = "";

  //   let isValid = true;
  //   const dayInputElement = document.querySelector("#day-input");
  //   const dayInputValue = dayInputElement.value;

  //   if (!dayInputValue) {
  //     dayErrorElement.textContent = "this field is required";
  //     isValid = false;
  //   }

  //   return isValid;
}

// let dayErrorElement = document.querySelector("#day-error");
// dayErrorElement = dayErrorElement.textContent = "123";

// console.log(dayErrorElement);

function submitForm() {
  //form.submit();
  console.log("formulaire soumis !");
}
