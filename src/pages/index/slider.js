import { hideEl, showEl } from './support'

export const sliderFunc = () => {
  const icons = document.querySelectorAll('.rooms-icon')
  const btnLeft = document.querySelector('.rooms-slider__arrow_left')
  const btnRight = document.querySelector('.rooms-slider__arrow_right')
  const sliderItems = document.querySelectorAll('.rooms-slider__item')

  let currentItemNumber

  const setCurrentItem = (number) => {
    if (number != currentItemNumber) {
      hideEl(sliderItems[currentItemNumber], 'rooms-slider__item_active')
      icons[currentItemNumber].classList.remove('rooms-icon_active')
      currentItemNumber = number
      showEl(sliderItems[currentItemNumber], 'rooms-slider__item_active', 'grid')
      icons[currentItemNumber].classList.add('rooms-icon_active')
      // if (number == 0) {
      //   btnLeft.disabled = true
      // } else {
      //   btnLeft.disabled = false
      // }
      // if (number == sliderItems.length - 1) {
      //   btnRight.disabled = true
      // } else {
      //   btnRight.disabled = false
      // }
    }
  }
  currentItemNumber = 0
  showEl(sliderItems[currentItemNumber], 'rooms-slider__item_active', 'grid')
  icons[currentItemNumber].classList.add('rooms-icon_active')
  // if (currentItemNumber == 0) {
  //   btnLeft.disabled = true
  // } else {
  //   btnLeft.disabled = false
  // }
  // if (currentItemNumber == sliderItems.length - 1) {
  //   btnRight.disabled = true
  // } else {
  //   btnRight.disabled = false
  // }

  btnLeft.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentItemNumber > 0)
      setCurrentItem(currentItemNumber - 1)
    else
      setCurrentItem(sliderItems.length - 1)
  })
  btnRight.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentItemNumber < sliderItems.length - 1)
      setCurrentItem(currentItemNumber + 1)
    else
      setCurrentItem(0)
  })

  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', (e) => {
      e.preventDefault()
      setCurrentItem(i)
    })
  }
}