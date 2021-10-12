const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = document.querySelector('#ingredients');
ingredients.forEach(addElement);
function addElement(ingredient) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return ingredientsList.append(item)
}

