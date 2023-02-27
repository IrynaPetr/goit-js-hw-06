
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const arrayIngridients = [];

// ingredients.forEach(el => {
//   const ingredient = document.createElement('li');
//   ingredient.classList.add('item');
//   ingredient.textContent = el;
//   console.log(ingredient);
// arrayIngridients.push(ingredient);

// })
// console.log(arrayIngridients);

// const listEl = document.querySelector('#ingredients');
// listEl.append(...arrayIngridients);
// console.log(listEl);

const listEl = document.querySelector('#ingredients');
const itemlist = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  console.log(itemEl);
  return itemEl;
})

listEl.append(...itemlist);
