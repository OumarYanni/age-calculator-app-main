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
  const dayInputValue = dayInputElement.value;
  const isDayValid = dayInputValue >= 1 && dayInputValue <= 31;

  const monthInputElement = document.querySelector("#month-input");
  const monthInputValue = monthInputElement.value;
  const isMonthValid = monthInputValue >= 1 && monthInputValue <= 12;

  const yearInputElement = document.querySelector("#year-input");
  const yearInputValue = yearInputElement.value;

  let currentDate = new Date();
  let dateToBeVerified = new Date(
    yearInputValue,
    monthInputValue,
    dayInputValue
  );
  const isDateInTheFuture = dateToBeVerified < currentDate;

  console.log(isDayValid);
  console.log(isMonthValid);
  console.log(isDateInTheFuture);

  // Ce n'est pas valide
  if (!dayInputValue || !monthInputValue || !yearInputValue) {
    console.log("===");
  } else {
    // C'est valide
  }

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
