
const btnDescrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const counterSpanEl = document.querySelector('#value')

btnDescrementEl.addEventListener('click', () => {
counterValue--;
counterSpanEl.innerHTML = counterValue;
})

btnIncrementEl.addEventListener('click', ()=> {
  counterValue++;
  counterSpanEl.innerHTML = counterValue;
})
