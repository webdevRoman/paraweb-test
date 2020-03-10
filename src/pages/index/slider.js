import { hideEl, showEl } from './support'

export class Slider {
  constructor(btnLeftClass, btnRightClass, itemsClass, activeItemClass, itemsDisplay, iconsClass = null, activeIconsClass = null, counterClass = null, counterSumClass = null) {
    this.btnLeft = document.querySelector(`.${btnLeftClass}`)
    this.btnRight = document.querySelector(`.${btnRightClass}`)
    this.sliderItems = document.querySelectorAll(`.${itemsClass}`)
    this.activeItemClass = activeItemClass
    this.itemsDisplay = itemsDisplay
    this.currentItemNumber = 0
    if (iconsClass == null) {
      this.icons = iconsClass
    } else {
      this.icons = document.querySelectorAll(`.${iconsClass}`)
    }
    this.activeIconsClass = activeIconsClass
    if (counterClass == null) {
      this.counter = counterClass
    } else {
      this.counter = document.querySelector(`.${counterClass}`)
    }
    if (counterSumClass == null) {
      this.counterSum = counterSumClass
    } else {
      this.counterSum = document.querySelector(`.${counterSumClass}`)
    }

    showEl(this.sliderItems[this.currentItemNumber], this.activeItemClass, this.itemsDisplay)
    if (this.icons != null)
      this.icons[this.currentItemNumber].classList.add(this.activeIconsClass)
    if (this.counter != null && this.counterSum != null) {
      this.counter.innerText = this.currentItemNumber + 1
      this.counterSum.innerText = this.sliderItems.length
    }
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

    this.btnLeft.addEventListener('click', (e) => {
      e.preventDefault()
      if (this.currentItemNumber > 0)
        this.setCurrentItem(this.currentItemNumber - 1)
      else
        this.setCurrentItem(this.sliderItems.length - 1)
    })
    this.btnRight.addEventListener('click', (e) => {
      e.preventDefault()
      if (this.currentItemNumber < this.sliderItems.length - 1)
        this.setCurrentItem(this.currentItemNumber + 1)
      else
        this.setCurrentItem(0)
    })

    if (this.icons != null)
      for (let i = 0; i < this.icons.length; i++) {
        this.icons[i].addEventListener('click', (e) => {
          e.preventDefault()
          this.setCurrentItem(i)
        })
      }
  }

  setCurrentItem(number) {
    if (number != this.currentItemNumber) {
      hideEl(this.sliderItems[this.currentItemNumber], this.activeItemClass)
      if (this.icons != null)
        this.icons[this.currentItemNumber].classList.remove(this.activeIconsClass)
      this.currentItemNumber = number
      showEl(this.sliderItems[this.currentItemNumber], this.activeItemClass, this.itemsDisplay)
      if (this.icons != null)
        this.icons[this.currentItemNumber].classList.add(this.activeIconsClass)
      if (this.counter != null && this.counterSum != null)
        this.counter.innerText = this.currentItemNumber + 1
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
}

// export const sliderFunc = () => {
//   const icons = document.querySelectorAll('.rooms-icon')
//   const btnLeft = document.querySelector('.rooms-slider__arrow_left')
//   const btnRight = document.querySelector('.rooms-slider__arrow_right')
//   const sliderItems = document.querySelectorAll('.rooms-slider__item')

//   let currentItemNumber

//   const setCurrentItem = (number) => {
//     if (number != currentItemNumber) {
//       hideEl(sliderItems[currentItemNumber], 'rooms-slider__item_active')
//       icons[currentItemNumber].classList.remove('rooms-icon_active')
//       currentItemNumber = number
//       showEl(sliderItems[currentItemNumber], 'rooms-slider__item_active', 'grid')
//       icons[currentItemNumber].classList.add('rooms-icon_active')
//       // if (number == 0) {
//       //   btnLeft.disabled = true
//       // } else {
//       //   btnLeft.disabled = false
//       // }
//       // if (number == sliderItems.length - 1) {
//       //   btnRight.disabled = true
//       // } else {
//       //   btnRight.disabled = false
//       // }
//     }
//   }
//   currentItemNumber = 0
//   showEl(sliderItems[currentItemNumber], 'rooms-slider__item_active', 'grid')
//   icons[currentItemNumber].classList.add('rooms-icon_active')
//   // if (currentItemNumber == 0) {
//   //   btnLeft.disabled = true
//   // } else {
//   //   btnLeft.disabled = false
//   // }
//   // if (currentItemNumber == sliderItems.length - 1) {
//   //   btnRight.disabled = true
//   // } else {
//   //   btnRight.disabled = false
//   // }

//   btnLeft.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (currentItemNumber > 0)
//       setCurrentItem(currentItemNumber - 1)
//     else
//       setCurrentItem(sliderItems.length - 1)
//   })
//   btnRight.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (currentItemNumber < sliderItems.length - 1)
//       setCurrentItem(currentItemNumber + 1)
//     else
//       setCurrentItem(0)
//   })

//   for (let i = 0; i < icons.length; i++) {
//     icons[i].addEventListener('click', (e) => {
//       e.preventDefault()
//       setCurrentItem(i)
//     })
//   }
// }