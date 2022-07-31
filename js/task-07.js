const controlText = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

controlText.addEventListener('input', onDraging)

function onDraging(event) {
  spanText.style.fontSize = event.target.value + 'px'
}
