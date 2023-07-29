const plusNumber = document.querySelector('button[data-action="increment"]');
const minNumber = document.querySelector('button[data-action="decrement"]');
let startValue = document.querySelector("#value");
let counterValue = 0;
plusNumber.addEventListener("click", plusValue);
minNumber.addEventListener("click", minValue);

function plusValue() {
  counterValue += 1;
  startValue.textContent = counterValue;
}

function minValue() {
  counterValue -= 1;
  startValue.textContent = counterValue;
}
console.log(counterValue);
