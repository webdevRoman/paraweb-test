import './index.sass'
import '../common/base.sass'

import { hideEl, showEl } from './support'

import { hideNotification } from '../../components/header-index/header-index'
hideNotification()

import { burger } from '../../components/burger/burger'
burger()


const mainSectionWork = () => {
  const mainLinks = document.querySelectorAll('.main-menu__link')
  const mainImages = document.querySelectorAll('.main-image')
  const mainRadios = document.querySelectorAll('.main-radio')
  const burgerItems = document.querySelectorAll('.burger-menu__item')

  const changeSectionItem = (i) => {
    if (!mainLinks[i].classList.contains('main-menu__link_active')) {
      for (let j = 0; j < mainLinks.length; j++) {
        mainLinks[j].classList.remove('main-menu__link_active')
        mainRadios[j].classList.remove('main-radio_active')
        burgerItems[j].classList.remove('burger-menu__item_active')
        hideEl(mainImages[j], 'main-image_active')
      }
      mainLinks[i].classList.add('main-menu__link_active')
      mainRadios[i].classList.add('main-radio_active')
      burgerItems[i].classList.add('burger-menu__item_active')
      showEl(mainImages[i], 'main-image_active', 'block')
    }
  }

  for (let i = 0; i < mainLinks.length; i++) {
    mainLinks[i].addEventListener('click', (e) => {
      e.preventDefault()
      changeSectionItem(i)
    })
  }
  for (let i = 0; i < mainRadios.length; i++) {
    mainRadios[i].addEventListener('click', (e) => {
      e.preventDefault()
      changeSectionItem(i)
    })
  }
  for (let i = 0; i < burgerItems.length; i++) {
    burgerItems[i].addEventListener('click', (e) => {
      e.preventDefault()
      changeSectionItem(i)
      const burgerLogo = document.querySelector('.burger-logo').childNodes[0]
      const burgerBtn = document.querySelector('.burger-btn')
      const burgerBody = document.querySelector('.burger-body')
      burgerBtn.classList.toggle('burger-btn_active')
      burgerLogo.classList.toggle('burger-logo_active')
      burgerBody.classList.remove('burger-body_active')
      setTimeout(() => {
        burgerBody.style.display = 'none'
      }, 200)
    })
  }
  mainImages.forEach(img => { img.style.display = 'none' })
  mainLinks[0].classList.add('main-menu__link_active')
  mainRadios[0].classList.add('main-radio_active')
  burgerItems[0].classList.add('burger-menu__item_active')
  showEl(mainImages[0], 'main-image_active', 'block')
}
mainSectionWork()


import { Slider } from './slider'
const roomsSlider = new Slider('rooms-slider__arrow_left', 'rooms-slider__arrow_right', 'rooms-slider__item', 'rooms-slider__item_active', 'grid', 'rooms-icon', 'rooms-icon_active')
const newsSlider = new Slider('news-slider__arrow_left', 'news-slider__arrow_right', 'news-item', 'news-item_active', 'block', null, null, 'news-slider__curpage', 'news-slider__pagesnumb')

// Rooms section
if (document.body.clientWidth <= 800) {
  const iconsContainer = document.querySelector('.rooms-icons')
  const margin = (document.body.clientWidth - iconsContainer.clientWidth) / 2
  iconsContainer.style.marginRight = `-${margin}px`
  iconsContainer.style.marginLeft = `-${margin}px`
}


import { Booking } from './booking'
const booking = new Booking()

// Validation
const bookingSubmit = document.querySelector('.booking-btn')
let calendarCheckin
let calendarCheckout

if (document.body.clientWidth <= 800) {
  calendarCheckin = document.getElementById('booking-checkin-s')
  calendarCheckout = document.getElementById('booking-checkout-s')
} else {
  calendarCheckin = document.getElementById('booking-checkin')
  calendarCheckout = document.getElementById('booking-checkout')
}

if (document.body.clientWidth <= 800) {
  calendarCheckin.addEventListener('change', () => {
    calendarCheckin.parentNode.parentNode.parentNode.classList.remove('booking-input_error')
  })
  calendarCheckout.addEventListener('change', () => {
    calendarCheckout.parentNode.parentNode.parentNode.classList.remove('booking-input_error')
  })
} else {
  calendarCheckin.addEventListener('change', () => {
    calendarCheckin.parentNode.parentNode.classList.remove('booking-input_error')
  })
  calendarCheckout.addEventListener('change', () => {
    calendarCheckout.parentNode.parentNode.classList.remove('booking-input_error')
  })
}

bookingSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  const bookingInput = document.querySelector('.booking-input_select')
  const bookingItems = document.querySelector('.booking-select__items')
  if (bookingItems.classList.contains('booking-select__items_active')) {
    hideEl(bookingItems, 'booking-select__items_active')
    bookingInput.classList.remove('booking-input_select_active')
  }
  if (calendarCheckin.value !== '' && calendarCheckout.value !== '' && booking.isValid()) {
    alert('Заявка отправлена.')
    calendarCheckin.value = ''
    calendarCheckout.value = ''
    booking.clearNumbers()
  } else {
    let errorBlocks = []
    if (document.body.clientWidth <= 800) {
      if (calendarCheckin.value == '' || calendarCheckout.value == '') {
        errorBlocks.push(calendarCheckin.parentNode.parentNode.parentNode)
      }
    } else {
      if (calendarCheckin.value == '') {
        errorBlocks.push(calendarCheckin.parentNode.parentNode)
      }
      if (calendarCheckout.value == '') {
        errorBlocks.push(calendarCheckout.parentNode.parentNode)
      }
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