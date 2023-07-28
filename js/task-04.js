const plusNumber = document.querySelector('button[data-action="increment"]');
const minNumber = document.querySelector('button[data-action="decrement"]');
const startValue = document.querySelector(".value");
let counterValue = 0;
plusNumber.addEventListener("click", plusValue);
minNumber.addEventListener("click", minValue);

function plusValue() {
  counterValue += 1;
  startValue = counterValue;
}

function minValue() {
  counterValue -= 1;
  startValue = counterValue;
}
console.log(counterValue);
