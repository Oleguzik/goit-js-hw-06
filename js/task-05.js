const contLink = {
  inputName: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output'),
}

contLink.inputName.addEventListener('input', onEnterText)

function onEnterText(event) {
  const nameForm = event.currentTarget
  contLink.spanName.textContent = nameForm.value
  if (nameForm.value === '') {
    contLink.spanName.textContent = 'Anonymous'
  }
}
