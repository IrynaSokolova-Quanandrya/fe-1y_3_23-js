/*
 * Делегування подій
 * - загальний слухач
 * - фільтр цілі кліку
 */

const container = document.querySelector('.js-container')

container.addEventListener('click', onButtonClick)

function onButtonClick(event) {
  if(event.target.nodeName !== 'BUTTON'){
    return;
  }
  console.log(event.target.nodeName);
  console.log(event.target.textContent);
}








// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log(evt.target.textContent);
// }

// /*
//  * Код додавання кнопок
//  */
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }
