"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsItems = document.getElementById(`ingredients`);

ingredients.forEach((item) => {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = item;
  ingredientsItems.appendChild(li);
  console.log(item);
});
