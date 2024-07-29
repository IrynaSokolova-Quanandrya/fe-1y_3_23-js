// import '../css/common.css';

const userName = 'Poly';

// console.log(userName);



// console.log('Виконання першого логу');

// console.log('Виконання другого логу');


/*
 * Метод window.setTimeout(callback, delay, args)
 */
const logger = () => {
    console.log(`Код всередині setTimeout`);
}
console.log('Before');
const firstTimeoutId = setTimeout(()=>{
    console.log('Перший планувальник');
}, 100);

const timeoutId = setTimeout(()=>{
    console.log('Другий планувальник');
}, 100);

console.log('after');
clearTimeout(timeoutId);
clearTimeout(firstTimeoutId);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */


// clearTimeout(timeoutId)






// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(()=>console.log(i), 1);
  
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(()=>console.log(i), 1);
  
// }