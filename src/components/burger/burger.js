export const burger = () => {
  const burgerLogo = document.querySelector('.burger-logo').childNodes[0]
  const burgerBtn = document.querySelector('.burger-btn')
  const burgerBody = document.querySelector('.burger-body')

  // const windowHeight = window.innerHeight
  // const burgerBodyHeight = windowHeight - burgerLogo.parentNode.parentNode.parentNode.offsetHeight + 'px'
  // burgerBody.style.innerHeight = burgerBodyHeight

  burgerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    burgerBtn.classList.toggle('burger-btn_active')
    if (burgerBody.classList.contains('burger-body_active')) {
      burgerBody.classList.remove('burger-body_active')
      setTimeout(() => {
        burgerBody.style.display = 'none'
      }, 200)
    } else {
      burgerBody.style.display = 'flex'
      setTimeout(() => {
        burgerBody.classList.add('burger-body_active')
      }, 200)
    }
    burgerLogo.classList.toggle('burger-logo_active')
  })
}