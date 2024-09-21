// 1 Завдання

const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// 2 Завдання

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.innerHTML = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");

// 3 Завдання

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('#gallery');

gallery.innerHTML = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join('');


// 4 Завдання

let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');

const updateValue = () => {
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
