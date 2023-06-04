"use strict";

const inputName = document.querySelector("#name-input");
const spanName =  document.querySelector("#name-output");
 
inputName.addEventListener(`input`, () => {
   const name = inputName.value;

   if (name === ""){
    spanName.textContent = "Anonymous";
   } else{
      spanName.textContent = name;
   }

});