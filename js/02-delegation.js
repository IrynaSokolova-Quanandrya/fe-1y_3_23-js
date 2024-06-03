/*
 * Делегування подій
 * - загальний слухач
 * - фільтр цілі кліку
 */

const containerRef = document.querySelector('.js-container')

containerRef.addEventListener('click', onBtnClick)

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
  e.target.style.backgroundColor = 'green';

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
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  containerRef.appendChild(btn);
  labelCounter += 1;
}
