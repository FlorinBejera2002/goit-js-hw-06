"use strict";
// 1.Obtin referinte catre obiect.
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

// 2.Initializez valoarea contorului
let counterValue = 0;

counterValueSpan.textContent = counterValue;

//  3.Adaug event listener pentru butonul de decrementare
decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    counterValueSpan.textContent = counterValue; 
  });

// 4.Adaug event listener pentru butonul de incrementare
  incrementButton.addEventListener('click', () => {
    counterValue += 1; 
    counterValueSpan.textContent = counterValue; 
  });