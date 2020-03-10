import { hideEl, showEl } from './support'

export class Booking {
  constructor() {
    this.adultsNumber = 0
    this.childrenNumber = 0
    this.bookingFunc()
  }
  bookingFunc() {
    const bookingInput = document.querySelector('.booking-input_select')
    const bookingInputContainer = document.querySelector('.booking-input_select__container')
    const bookingItems = document.querySelector('.booking-select__items')
    const bookingInputCommon = document.getElementById('booking-input-common')
    const bookingInputAdult = document.getElementById('booking-input-adult')
    const bookingInputChild = document.getElementById('booking-input-child')
    const bookingMinusAdult = document.getElementById('booking-adult-minus')
    const bookingMinusChild = document.getElementById('booking-child-minus')
    const bookingPlusAdult = document.getElementById('booking-adult-plus')
    const bookingPlusChild = document.getElementById('booking-child-plus')

    bookingInputContainer.addEventListener('click', (e) => {
      e.preventDefault()
      bookingInputContainer.parentNode.classList.remove('booking-input_error')
      if (bookingItems.classList.contains('booking-select__items_active')) {
        hideEl(bookingItems, 'booking-select__items_active')
        bookingInput.classList.remove('booking-input_select_active')
      } else {
        bookingItems.style.display = 'block'
        setTimeout(() => {
          bookingItems.classList.add('booking-select__items_active')
        }, 200)
        bookingInput.classList.add('booking-input_select_active')
      }
    })

    this.adultsNumber = 0
    this.childrenNumber = 0

    bookingInputCommon.value = 'Выберите гостей'
    bookingInputAdult.value = this.adultsNumber
    bookingInputChild.value = this.childrenNumber
    bookingMinusAdult.disabled = true
    bookingMinusChild.disabled = true
    
    const incrementPerson = (person) => {
      if (person == 'adult') {
        this.adultsNumber++
        bookingInputAdult.value = this.adultsNumber
        bookingMinusAdult.disabled = false
        if (this.adultsNumber >= 99)
          bookingPlusAdult.disabled = true
      } else if (person == 'child') {
        this.childrenNumber++
        bookingInputChild.value = this.childrenNumber
        bookingMinusChild.disabled = false
        if (this.childrenNumber >= 99)
          bookingPlusChild.disabled = true
      }
    }
    const decrementPerson = (person) => {
      if (person == 'adult') {
        this.adultsNumber--
        bookingInputAdult.value = this.adultsNumber
        bookingPlusAdult.disabled = false
        if (this.adultsNumber < 1)
          bookingMinusAdult.disabled = true
      } else if (person == 'child') {
        this.childrenNumber--
        bookingInputChild.value = this.childrenNumber
        bookingPlusChild.disabled = false
        if (this.childrenNumber < 1)
          bookingMinusChild.disabled = true
      }
    }
    const setCommonInput = (adults, children) => {
      if (adults == 0 && children == 0)
        bookingInputCommon.value = 'Выберите гостей'
      else if (adults == 0) {
        if (children == 1)
          bookingInputCommon.value = `${children} ребенок`
        else
          bookingInputCommon.value = `${children} детей`
      } else if (children == 0) {
        if (adults == 1)
          bookingInputCommon.value = `${adults} взрослый`
        else
          bookingInputCommon.value = `${adults} взрослых`
      } else {
        if (children == 1 && adults == 1)
          bookingInputCommon.value = `${adults} взрослый, ${children} ребенок`
        else if (children == 1)
          bookingInputCommon.value = `${adults} взрослых, ${children} ребенок`
        else if (adults == 1)
          bookingInputCommon.value = `${adults} взрослый, ${children} детей`
        else
          bookingInputCommon.value = `${adults} взрослых, ${children} детей`
      }
    }

    bookingPlusAdult.addEventListener('click', (e) => {
      e.preventDefault()
      incrementPerson('adult')
      setCommonInput(this.adultsNumber, this.childrenNumber)
    })
    bookingPlusChild.addEventListener('click', (e) => {
      e.preventDefault()
      incrementPerson('child')
      setCommonInput(this.adultsNumber, this.childrenNumber)
    })
    bookingMinusAdult.addEventListener('click', (e) => {
      e.preventDefault()
      decrementPerson('adult')
      setCommonInput(this.adultsNumber, this.childrenNumber)
    })
    bookingMinusChild.addEventListener('click', (e) => {
      e.preventDefault()
      decrementPerson('child')
      setCommonInput(this.adultsNumber, this.childrenNumber)
    })
  }
  isValid() {
    if (this.adultsNumber > 0 || this.childrenNumber > 0)
      return true
    else
      return false
  }
  clearNumbers() {
    const bookingInputCommon = document.getElementById('booking-input-common')
    const bookingInputAdult = document.getElementById('booking-input-adult')
    const bookingInputChild = document.getElementById('booking-input-child')
    this.adultsNumber = 0
    this.childrenNumber = 0
    bookingInputAdult.value = 0
    bookingInputChild.value = 0
    bookingInputCommon.value = 'Выберите гостей'
  }
}