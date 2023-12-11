const form = document.querySelector("#age-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isInputValid()) {
    submitForm();
  }
});

// Première étape : finir toutes les vérifications avec les day, month et year
// Deuxième étape : afficher des messages d'erreurs quand le day ou le month n'est pas correct
// Objectif : avoir un truc qui marche mais si c'est moche

function isInputValid() {
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
    console.log("Veuillez remplir tous les champs.");
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

    console.log(isDayValid);
    console.log(isMonthValid);
    console.log(isDateInTheFuture);
    console.log(isDaysInMonthValid);
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
