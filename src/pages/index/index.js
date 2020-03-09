import './index.sass'
import '../common/base.sass'

import { hideEl, showEl } from './support'
import { hideNotification } from '../../components/header-index/header-index'
hideNotification()
import { sliderFunc } from './slider'
sliderFunc()
import { Booking } from './booking'
const booking = new Booking()
booking.bookingFunc()

const mainSectionWork = () => {
  const mainLinks = document.querySelectorAll('.main-menu__link')
  const mainImages = document.querySelectorAll('.main-image')

  for (let i = 0; i < mainLinks.length; i++) {
    mainLinks[i].addEventListener('click', (e) => {
      e.preventDefault()
      for (let j = 0; j < mainLinks.length; j++) {
        mainLinks[j].classList.remove('main-menu__link_active')
        hideEl(mainImages[j], 'main-image_active')
      }
      mainLinks[i].classList.add('main-menu__link_active')
      showEl(mainImages[i], 'main-image_active', 'block')
    })
  }
  mainImages.forEach(img => {
    img.style.display = 'none'
  })
  mainLinks[0].classList.add('main-menu__link_active')
  showEl(mainImages[0], 'main-image_active', 'block')
}
mainSectionWork()


// Validation
const bookingSubmit = document.querySelector('.booking-btn')
const calendarCheckin = document.getElementById('booking-checkin')
const calendarCheckout = document.getElementById('booking-checkout')

calendarCheckin.addEventListener('change', () => {
  calendarCheckin.parentNode.parentNode.classList.remove('booking-input_error')
})
calendarCheckout.addEventListener('change', () => {
  calendarCheckout.parentNode.parentNode.classList.remove('booking-input_error')
})

bookingSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  if (calendarCheckin.value !== '' && calendarCheckout.value !== '' && booking.isValid()) {
    alert('Заявка отправлена.')
    calendarCheckin.value = ''
    calendarCheckout.value = ''
    booking.clearNumbers()
  } else {
    let errorBlocks = []
    if (calendarCheckin.value == '') {
      errorBlocks.push(calendarCheckin.parentNode.parentNode)
    }
    if (calendarCheckout.value == '') {
      errorBlocks.push(calendarCheckout.parentNode.parentNode)
    }
    if (!booking.isValid()) {
      errorBlocks.push(document.querySelector('.booking-input_select'))
    }
    errorBlocks.forEach(b => {
      b.classList.add('booking-input_error')
    })
    // bookingSubmit.disabled = true
  }
})

import { burger } from '../../components/burger/burger'
burger()