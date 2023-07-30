const input = document.querySelector('[data-length="6"]');
input.addEventListener("blure", onbBorderChange);

function onBorderChange(event) {
  const dataInput = event.currentTarget;
  if (dataInput.value.length === Number(6)) {
    input.add.classList(".valid");
  } else {
    input.add.classList(".invalid ");
  }
  console.dir(event.currentTarget);
}
