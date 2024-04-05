/*
 * Події миші
 * - mouseenter та mouseleave (це ховер)
 * - mouseover та mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');
const innerBoxRef = document.querySelector('.inner-box')
// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(e) {
   // Отримуємо координати миші на екрані
   const mouseX = e.pageX;
   const mouseY = e.pageY;
 
   // Отримуємо координати центра блоку
   const innerBoxRefX = innerBoxRef.offsetLeft + innerBoxRef.offsetWidth / 2;
   const innerBoxRefY = innerBoxRef.offsetTop + innerBoxRef.offsetHeight / 2;
 
   // Обчислюємо відстань від миші до центру блоку
   const distanceX = mouseX - innerBoxRefX;
   const distanceY = mouseY - innerBoxRefY;
 
   // Рухаємо блок на відстань, яку миша змістилася відносно центру блоку
   innerBoxRef.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
}