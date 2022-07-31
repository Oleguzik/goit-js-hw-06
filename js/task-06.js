const inpuText = document.querySelector('#validation-input')
const textLength = Number(inpuText.getAttribute('data-length'))

inpuText.addEventListener('blur', onBlurFocus)

function onBlurFocus(event) {
  const currentTextLength = event.target.value.length
  if (currentTextLength === textLength) {
    inpuText.classList.remove('invalid')
    inpuText.classList.add('valid')
  } else {
    inpuText.classList.remove('valid')
    inpuText.classList.add('invalid')
  }
}
