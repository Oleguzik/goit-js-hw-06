const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]
const itemUl = document.querySelector('.gallery')
itemUl.style.display = 'flex'
itemUl.style.flexWrap = 'wrap'

const fotoShadow =
  'box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);'

const injectFoto = images
  .map(
    itemLi =>
      `<li style='list-style: none; padding: 10px; ${fotoShadow}'><img width=250 src='${itemLi.url}' 
      alt='${itemLi.alt}'></li>`
  )
  .join('')

itemUl.insertAdjacentHTML('afterbegin', injectFoto)
