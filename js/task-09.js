function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const currentBgColor = document.querySelector('body')
const spanColor = document.querySelector('.color')
const btnControlColor = document.querySelector('.change-color')

btnControlColor.addEventListener('click', clckBtn)

function clckBtn() {
  const bgColor = getRandomHexColor()
  currentBgColor.style.backgroundColor = bgColor
  spanColor.textContent = bgColor
}
