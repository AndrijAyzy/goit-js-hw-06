const counterValueSpan = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

incrementButton.addEventListener('click', () => {
  counterValue++;
  counterValueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  counterValueSpan.textContent = counterValue;
});