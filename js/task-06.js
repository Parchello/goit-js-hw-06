const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBorderChange);

function onBorderChange(event) {
  const dataInput = event.currentTarget;
  if (dataInput.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
