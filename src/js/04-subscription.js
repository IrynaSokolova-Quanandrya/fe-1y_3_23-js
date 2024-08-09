/**
 * Робимо набридалку
 */
 
// function fnA(params) {


// }

// const result = fnA();

const promptDelay = 1000;
const maxPromptAttempts = 3;

let promptCounter = 0;
let hasSubscribed = false;


const timeoutId = setTimeout(() => {
   confirm('Підпишись')
   promptCounter+=1
}, 2000)



const intervalId = setInterval(() => {
   if (promptCounter === 3 || hasSubscribed) {
      clearInterval(intervalId)
      return;
}
   hasSubscribed = confirm('Підпишись')
   promptCounter += 1

   
}, 3000)




// ЗАДАЧА 1
/**
 * Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, 
 * починаючи від from і закінчуючи to.
    * Зробіть два варіанти рішення.
    * 1. Використовуючи setInterval.
    * 2. Використовуючи вкладений setTimeout.
 */

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(5, 10);

// ЗАДАЧА 2
/**
 * Коли запуститься запланована функція?
 * 1.Після циклу.
 * 2. До циклу.
 * 3. На початку циклу.
 * Що буде показувати в консолі?
 */
// let a = 0;

// setTimeout(() => console.log('а в setTimeout', a), 100); // ?

// припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 10000; i++) {
//   a += 1;
//   console.log('а всередині циклу', a);
// }