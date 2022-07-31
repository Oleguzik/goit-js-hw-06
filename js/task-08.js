const formDatas = document.querySelector('.login-form')

formDatas.addEventListener('submit', onDataSubmit)

function onDataSubmit(event) {
  // cancel browser defaults
  event.preventDefault()
  // destructuring current data
  const {
    elements: { email, password },
  } = event.currentTarget
  // collect data in Obj
  const sendData = { email, password }

  if (email.value === '' || password.value === '') {
    alert('Усі поля мають бути заповнені!!!')
    return false
  }
  sendData.email = email.value
  sendData.password = password.value

  console.log(sendData)
  // reset form data
  event.currentTarget.reset()
}
