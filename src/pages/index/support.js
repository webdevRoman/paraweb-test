export const hideEl = (el, className) => {
  el.classList.remove(className)
  setTimeout(() => {
    el.style.display = 'none'
  }, 200)
}
export const showEl = (el, className, display) => {
  setTimeout(() => {
    el.style.display = display
  }, 200)
  setTimeout(() => {
    el.classList.add(className)
  }, 410)
}