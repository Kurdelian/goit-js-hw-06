const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.innerHTML = ingredient
  return itemEl
})

const ingredientsList = document.querySelector('#ingredients')

ingredientsList.append(...ingredientsItem)

console.log(ingredientsList)