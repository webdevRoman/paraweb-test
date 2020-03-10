import './about.sass'
import '../common/base.sass'

class Slider {
  constructor(container, items, itemWidth, gapWidth, btnLeft, btnRight) {
    this.container = container
    this.items = items
    this.itemWidth = itemWidth
    this.gapWidth = gapWidth
    this.btnLeft = btnLeft
    this.btnRight = btnRight
    this.currentItem = 0

    this.container.style.marginLeft = '0px'
    this.btnLeft.disabled = true
    this.btnLeft.addEventListener('click', (e) => {
      e.preventDefault()
      this.slideRight()
    })
    this.btnRight.addEventListener('click', (e) => {
      e.preventDefault()
      e.preventDefault()
      this.slideLeft()
    })
  }

  slideRight() {
    this.container.style.marginLeft = parseInt(this.container.style.marginLeft) + this.itemWidth + this.gapWidth + 'px'
    this.currentItem--
    if (this.currentItem == 0) {
      this.btnLeft.disabled = true
    } else {
      this.btnLeft.disabled = false
    }
    if (document.body.clientWidth <= 800) {
      if (this.currentItem == this.items.length - 1) {
        this.btnRight.disabled = true
      } else {
        this.btnRight.disabled = false
      }
    } else {
      if (this.currentItem == this.items.length - 2) {
        this.btnRight.disabled = true
      } else {
        this.btnRight.disabled = false
      }
    }
  }
  slideLeft() {
    this.container.style.marginLeft = parseInt(this.container.style.marginLeft) - this.itemWidth - this.gapWidth + 'px'
    this.currentItem++
    if (this.currentItem == 0) {
      this.btnLeft.disabled = true
    } else {
      this.btnLeft.disabled = false
    }
    if (document.body.clientWidth <= 800) {
      if (this.currentItem == this.items.length - 1) {
        this.btnRight.disabled = true
      } else {
        this.btnRight.disabled = false
      }
    } else {
      if (this.currentItem == this.items.length - 2) {
        this.btnRight.disabled = true
      } else {
        this.btnRight.disabled = false
      }
    }
  }
}
const windowWidth = document.body.clientWidth
const sliderItemWidth = windowWidth > 1300 ? 600 : windowWidth > 1200 ? 480 : windowWidth > 800 ? 360 : 335
const slider = new Slider(document.querySelector('.wellness-slider__items'), document.querySelectorAll('.wellness-slider__item'), sliderItemWidth, 30, document.querySelector('.wellness-slider__arrow_left'), document.querySelector('.wellness-slider__arrow_right'))


class OrderValidator {
  constructor(inputsClass, btnClass, errorClass) {
    this.orderInputContainers = document.querySelectorAll(inputsClass)
    this.orderInputs = []
    this.orderInputContainers.forEach(container => {
      for (let i = 0; i < container.childNodes.length; i++) {
        if (container.childNodes[i].tagName == 'INPUT')
        this.orderInputs.push(container.childNodes[i])
      }
    })
    this.submitBtn = document.querySelector(btnClass)
    this.errorClass = errorClass
    this.orderFunc()
  }
  orderFunc() {
    this.submitBtn.addEventListener('click', (e) => {
      e.preventDefault()
      if (this.isValid()) {
        alert('Заявка отправлена.')
        this.clearInputs()
      } else {
        for (let i = 0; i < this.orderInputContainers.length; i++) {
          if (this.orderInputs[i].value =='')
            this.orderInputContainers[i].classList.add(this.errorClass)
        }
      }
    })
    for (let i = 0; i < this.orderInputContainers.length; i++) {
      this.orderInputs[i].addEventListener('input', () => {
        this.orderInputContainers[i].classList.remove(this.errorClass)
      })
    }
  }
  isValid() {
    for (let i = 0; i < this.orderInputs.length; i++)
      if (this.orderInputs[i].value == '')
        return false
    return true
  }
  clearInputs() {
    this.orderInputs.forEach(input => {
      input.value = ''
    })
  }
}
const orderValidator = new OrderValidator('.order-input', '.order-btn', 'order-input_error')


import { burger } from '../../components/burger/burger'
burger()