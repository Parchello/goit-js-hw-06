const list = document.querySelector("ul#categories");
console.log(list);

const items = document.querySelectorAll(".item");
console.dir(items[0].textContent);
console.log(
  `elements: ${items[0].children.length}`,
  `categories: ${items[1].children.length}`
);
console.dir(items);
