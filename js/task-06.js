const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const length = parseInt(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.length;

  if (inputLength === length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});