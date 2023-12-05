const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  console.log("toto");
  e.preventDefault();
  const dayInputElement = document.querySelector("#day-input");
  console.log(dayInputElement);
  const dayInputValue = dayInputElement.value;
  console.log(dayInputValue);
  console.log(typeof dayInputValue);

  const monthInputElement = document.querySelector("#month-input");
  console.log(monthInputElement);
  const monthInputValue = monthInputElement.value;
  console.log(monthInputValue);
  console.log(typeof monthInputValue);

  const yearInputElement = document.querySelector("#year-input");
  console.log(yearInputElement);
  const yearInputValue = yearInputElement.value;
  console.log(yearInputValue);
  console.log(typeof yearInputValue);
});
