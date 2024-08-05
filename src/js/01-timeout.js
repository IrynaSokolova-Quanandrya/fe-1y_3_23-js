// import '../css/common.css';

setTimeout(() => { }, 2000)






// console.log('Логування до таймауту');

// const timeoutId = setTimeout((value) => {
//     console.log(`Виклик функції через ${value}мс `);
// }, 2000, 2000)

// console.log(timeoutId);

// clearTimeout(timeoutId)

// console.log('Логування після таймауту');


// Коли запуститься запланована функція?
// 1. Після циклу.
// 2. До циклу.
// 3. На початку циклу.



// Що буде показувати alert?

// let num = 0;

// setTimeout(() => alert(num), 100); // ?

// // припустимо, що час виконання цієї функції > 100 мс

// for(let i = 0; i < 1000; i += 1) {
// num+=1;
// console.log(num);
// }

let seconds = 10;

const intervalId = setInterval(() => {
    if (seconds === 0) {
        clearInterval(intervalId);
        return;
    }
    console.log(`Залишилось ${seconds}секунд`);
    seconds -= 1
    
}, 1000)

let timerId = setTimeout(function() {

    console.log("Time's up!");

}, seconds * 1000);



