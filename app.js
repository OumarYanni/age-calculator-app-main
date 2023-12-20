const form = document.querySelector("#age-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dayInputValue = parseInt(
    document.querySelector("#day-input").value,
    10
  );
  const monthInputValue =
    parseInt(document.querySelector("#month-input").value, 10) - 1;
  const yearInputValue = parseInt(
    document.querySelector("#year-input").value,
    10
  );

  const isDayValid = isDayInputValid(
    dayInputValue,
    monthInputValue,
    yearInputValue
  );
  const isMonthValid = isMonthInputValid(
    dayInputValue,
    monthInputValue,
    yearInputValue
  );
  const isYearValid = isYearInputValid(
    yearInputValue,
    monthInputValue,
    dayInputValue
  );
  if (isDayValid && isMonthValid && isYearValid) {
    document.querySelector("#day-input").classList.remove("input-error");

    submitForm(dayInputValue, monthInputValue, yearInputValue);
  }
});

function isDayInputValid(dayInputValue, monthInputValue, yearInputValue) {
  let dayErrorElement = document.querySelector("#day-error");
  let dayLabelElement = document.querySelector("label[for='day-input']");

  dayErrorElement.textContent = "";
  const dayInputElement = document.querySelector("#day-input");

  dayInputElement.classList.remove("input-error");
  dayLabelElement.classList.remove("label-error");

  if (dayInputElement.value.trim() === "") {
    dayErrorElement.textContent = "This field is required";

    dayInputElement.classList.add("input-error");
    dayLabelElement.classList.add("label-error");

    return false;
  }

  const isDayValid = dayInputValue >= 1 && dayInputValue <= 31;
  if (!isDayValid) {
    dayErrorElement.textContent = "Must be a valid day";

    dayInputElement.classList.add("input-error");
    dayLabelElement.classList.add("label-error");

    return false;
  }

  const daysInMonth = new Date(
    yearInputValue,
    monthInputValue + 1,
    0
  ).getDate();

  if (dayInputValue > daysInMonth) {
    dayErrorElement.textContent = "Must be a valid day";

    dayInputElement.classList.add("input-error");
    dayLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

function isMonthInputValid(dayInputValue, monthInputValue, yearInputValue) {
  let monthErrorElement = document.querySelector("#month-error");
  let monthLabelElement = document.querySelector("label[for='month-input']");

  monthErrorElement.textContent = "";

  const monthInputElement = document.querySelector("#month-input");

  monthInputElement.classList.remove("input-error");
  monthLabelElement.classList.remove("label-error");

  if (monthInputElement.value.trim() === "") {
    monthErrorElement.textContent = "This field is required";

    monthInputElement.classList.add("input-error");
    monthLabelElement.classList.add("label-error");

    return false;
  }

  const isMonthValid = monthInputValue >= 0 && monthInputValue <= 11;

  if (!isMonthValid) {
    monthErrorElement.textContent = "Must be a valid month";

    monthInputElement.classList.add("input-error");
    monthLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

function isYearInputValid(yearInputValue, monthInputValue, dayInputValue) {
  let yearErrorElement = document.querySelector("#year-error");
  let yearLabelElement = document.querySelector("label[for='year-input']");

  yearErrorElement.textContent = "";

  const yearInputElement = document.querySelector("#year-input");

  yearInputElement.classList.remove("input-error");
  yearLabelElement.classList.remove("label-error");

  if (yearInputElement.value.trim() === "") {
    yearErrorElement.textContent = "This field is required";

    yearInputElement.classList.add("input-error");
    yearLabelElement.classList.add("label-error");

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

    yearInputElement.classList.add("input-error");
    yearLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

function calculateAge(dayInputValue, monthInputValue, yearInputValue) {
  const birthDate = new Date(yearInputValue, monthInputValue, dayInputValue);
  const today = new Date();

  let yearAge = today.getFullYear() - birthDate.getFullYear();
  let monthAge = today.getMonth() - birthDate.getMonth();
  let dayAge = today.getDate() - birthDate.getDate();

  if (dayAge < 0) {
    monthAge--;
    dayAge += new Date(yearInputValue, monthInputValue + 1, 0).getDate();
  }

  if (monthAge < 0) {
    yearAge--;
    monthAge += 12;
  }

  return { yearAge, monthAge, dayAge };
}

function animateNumber(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function submitForm(dayInputValue, monthInputValue, yearInputValue) {
  const age = calculateAge(dayInputValue, monthInputValue, yearInputValue);

  animateNumber(
    document.querySelector(".display-result-year"),
    0,
    age.yearAge,
    1500
  );
  animateNumber(
    document.querySelector(".display-result-month"),
    0,
    age.monthAge,
    1500
  );
  animateNumber(
    document.querySelector(".display-result-day"),
    0,
    age.dayAge,
    1500
  );

  console.log(
    "Age caculé : ",
    age.yearAge,
    "ans",
    age.monthAge,
    "mois",
    age.dayAge,
    "jours"
  );

  //form.submit();
  console.log("formulaire soumis !");
}
