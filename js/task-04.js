const contLink = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0

contLink.btnIncrement.addEventListener('click', () => {
  counterValue += 1
  contLink.value.textContent = `${counterValue}`
})

contLink.btnDecrement.addEventListener('click', () => {
  counterValue -= 1
  contLink.value.textContent = `${counterValue}`
})
