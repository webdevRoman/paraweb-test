export const hideNotification = () => {
  const notification = document.getElementById('header-notification')
  const notificationBtn = document.getElementById('header-notification-btn')

  notificationBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const notificationHeight = notification.clientHeight
    notification.style.marginTop = `-${notificationHeight}px`
    setTimeout(() => {
      notification.style.display = 'none'
    }, 500)
  })
}