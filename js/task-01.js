const ul = document.querySelector("#categories");
console.log("Number of categories:", ul.children.length);
const li = [...ul.children].forEach((item) =>
  console.log(
    "Category: " + item.firstElementChild.textContent + "\n" + "Elements:",
    item.lastElementChild.children.length
  )
);
