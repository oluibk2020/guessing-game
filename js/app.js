//Assignmnt 4 - compare value
const getInput = document.body.querySelector("#getText");
const formCompare = document.body.querySelector("#compare");
const resultCompare = document.body.querySelector("#result");

function compare(e) {
  e.preventDefault();

  const ranNum = Math.floor(Math.random() * 200) + 1;

  const inputVal = getInput.value;

  if (inputVal === "" || inputVal <= 0) {
    alert("Enter a valid number input greater than 0");
    return;
  }

  if (inputVal === ranNum) {
    resultCompare.textContent = `You win because your value: ${inputVal} matches our predefined value which is ${ranNum}. Pleasee try again`;
  } else {
    resultCompare.textContent = `You lose because your value: ${inputVal} does not match our predefined value which is ${ranNum}. Please try again`;
  }
}

formCompare.addEventListener("submit", compare);