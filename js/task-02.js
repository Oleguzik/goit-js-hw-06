const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const itemIngr = document.querySelector('#ingredients')

const injectList = ingredients
  .map(itemLi => `<li class="item">${itemLi}</li>`)
  .join('')

itemIngr.insertAdjacentHTML('afterbegin', injectList)
