"use strict";

const categoriesList = document.querySelector(`#categories`);
 console.log(categoriesList);

 const totalCategories = categoriesList.querySelectorAll(`.item`);
 const textOfNumber = `Number of categories:`;
 console.log(textOfNumber + totalCategories.length);

 const categoryItems = categoriesList.querySelectorAll(`.item`);
 categoryItems.forEach((item) => {
   const title =item.querySelector(`h2`).textContent;
   const elements = item.querySelectorAll(`li`);
     const categoryText = `Category:`;
     console.log(categoryText + title);
     const elementText = `Elements:`;
     console.log(elementText + elements.length);
 });

 