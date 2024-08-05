import '../css/common.css';

/**
 * - Показуєм і приховуємо за допомогою класу is-visible
 * - Приховуємо через певний час
 * - Приховуємо під час кліку
 * - Очищаємо таймер
 */


const refs = {
  notification: document.querySelector('.js-alert'),
};
  
// const notificationRef = document.querySelector('.js-alert')

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функції
 */
function onNotificationClick() {
  hideNotification();

}

function showNotification() {
  refs.notification.classList.add('is-visible');

}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
