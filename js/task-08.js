const form = document.querySelector(".login-form");

form.addEventListener("submit", collectData);

function collectData(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const formObject = {
    email: email.value,
    password: password.value,
  };
  const values = Object.values(formObject);
  if (values.includes("")) {
    alert("Всі поля повинні бути запонені");
  } else {
    console.log(formObject);
    form.reset();
  }
}
