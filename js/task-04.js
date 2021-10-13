
const valueEl = document.querySelector('#value');

const decrementEl = document.querySelector('#counter button[data-action="decrement"]');

const incrementEl = document.querySelector('#counter button[data-action="increment"]');
let counterValue = 0;
decrementEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})
incrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})