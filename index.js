const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    alert("Please enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);

  if (age < 0) {
    resultEl.innerText = "Invalid date! Please enter a past date.";
  } else {
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  // Check for future date
  if (birthdayDate > currentDate) {
    return -1; // Flag for invalid future date
  }

  // Accurate year calculation
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const isBeforeBirthdayThisYear =
    currentDate.getMonth() < birthdayDate.getMonth() ||
    (currentDate.getMonth() === birthdayDate.getMonth() &&
      currentDate.getDate() < birthdayDate.getDate());

  if (isBeforeBirthdayThisYear) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
