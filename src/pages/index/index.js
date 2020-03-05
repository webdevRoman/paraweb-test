import './index.sass'
import '../common/base.sass'

import { hideNotification } from '../../components/header-index/header-index'
hideNotification()

const mainSectionWork = () => {
  const mainLinks = document.querySelectorAll('.main-menu__link')
  const mainImages = document.querySelectorAll('.main-image')

  const hideEl = (el, className) => {
    el.classList.remove(className)
    setTimeout(() => {
      el.style.display = 'none'
    }, 200)
  }
  const showEl = (el, className) => {
    setTimeout(() => {
      el.style.display = 'block'
    }, 200)
    setTimeout(() => {
      el.classList.add(className)
    }, 410)
  }
  for (let i = 0; i < mainLinks.length; i++) {
    mainLinks[i].addEventListener('click', (e) => {
      e.preventDefault()
      for (let j = 0; j < mainLinks.length; j++) {
        mainLinks[j].classList.remove('main-menu__link_active')
        hideEl(mainImages[j], 'main-image_active')
      }
      mainLinks[i].classList.add('main-menu__link_active')
      showEl(mainImages[i], 'main-image_active')
    })
  }
  mainImages.forEach(img => {
    img.style.display = 'none'
  })
  mainLinks[0].classList.add('main-menu__link_active')
  showEl(mainImages[0], 'main-image_active')
}
mainSectionWork()