const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const itemIngr = document.querySelector('#ingredients')

// const injectList = ingredients
//   .map(itemLi => `<li class="item">${itemLi}</li>`)
//   .join('')
// itemIngr.insertAdjacentHTML('afterbegin', injectList)

// ingredients.forEach(itemLi => {
//   itemIngr.innerHTML += `<li class="item">${itemLi}</li>`
// })

ingredients.forEach(itemLi => {
  const itemL = document.createElement('li')
  itemL.textContent = `${itemLi}`
  itemL.style = 'item'

  itemIngr.insertAdjacentHTML('beforeend', itemL.outerHTML)
})
