const inpuText = document.querySelector('#validation-input')
const textLength = Number(inpuText.getAttribute('data-length'))

inpuText.addEventListener('blur', onBlurFocus)

function onBlurFocus(event) {
  const currentTextLength = event.target.value.length
  const currentClass = inpuText.classList
  if (currentTextLength === textLength) {
    currentClass.remove('invalid')
    currentClass.add('valid')
  } else {
    currentClass.remove('valid')
    currentClass.add('invalid')
  }
}
