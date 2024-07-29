// import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */
// console.log('Before');
// let num = 0;
// setInterval(()=>{
//     if(num === 6){
//         console.log('Ліміт вичерпано');
//         return;
//     }
//     num += 1
//     console.log(`${num} разів працює інтервал`);
// }, 1000)


// console.log("after");



// const logger = time => console.log(`Лог кожні ${time}s - ${Date.now()}`);

// const intervalId = setInterval(logger, 2000, 2)

/*
 * Очистка інтервалу з clearInterval(intervalId)
 */

// const loggerClearId = () => {
//     console.log('Виклик clearInterval');
//     clearInterval(intervalId);
// }

// setTimeout(loggerClearId, 3000)
// clearInterval(intervalId)

// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }
