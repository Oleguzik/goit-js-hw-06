const listEl = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${listEl.length}`)

const listItem = document.querySelectorAll('h2')
//
// const elemUl = document.querySelectorAll('.item ul')
// const itLi = []

// elemUl.forEach(itemLi => {
//   itLi.push(itemLi.childElementCount)
// })
// let i = 0

listItem.forEach(itemL => {
  console.log(`Category: ${itemL.textContent}`)
  // console.log(`Elem: ${itLi[i]}`)
  // const nextSN =
  console.log(`Elem: ${itemL.nextElementSibling.childElementCount}`)
  // i++
})
