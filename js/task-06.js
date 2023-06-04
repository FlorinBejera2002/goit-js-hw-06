"use strict";

const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function() {
  const value = inputElement.value;
  const length = value.length;
  const requiredLength = parseInt(inputElement.getAttribute('data-length'));

  if (length === requiredLength) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});