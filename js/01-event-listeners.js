/*
 * Події.
 * - Створення та видалення слухача
 * - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Посилальна ідентичність колбеків
 * - Об'ект Події
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', onClick)
removeListenerBtn.removeEventListener('click', onClick)

function onClick(event) {        
        console.log(event.target);
}



// targetBtn.addEventListener('click', onClick)

// function onClick(event) {    
//         console.log(event.currentTarget);    
// }

// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Додали слухача подій на цільову кнопку');
   
//     targetBtn.addEventListener('click', onClick)
// })

// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Зняли слухача з цільової кнопки');

//     targetBtn.removeEventListener('click', onClick)
// })

