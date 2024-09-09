const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
console.log(`%c🎉 Переможець, финишував за мс часу`,'color: green');
// console.log(`🤖 Заїзд розпочався, ставки не приймаються!`);


// const promises = horses.map(horse => {
//   return run(horse)
// })

// Promise.race(promises)
// .then(({horse, time})=>{
//     console.log(`%c🎉 Переможець ${horse}, финишував за ${time}мс часу`,'color: green');
// })



// function run(horse){
//     return new Promise((resolve, reject)=>{
//         const time = getRandomTime(3000, 4000)

//         setTimeout(()=>{
//             resolve({
//                 horse,
//                 time
//             })
//         },time)
//     })
// }


// run('Seabiscuit')
//   .then(horse => console.log(horse))
//   .catch(error => console.log(error))



  function getRandomTime(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

/**
 * 🤖 Заїзд розпочався, ставки не приймаються!
 * 🎉 Переможець ${horse}, финишував за ${time}мс часу
 * 📝 Заїзд закінчився, приймаються ставки.
 * 
 *  Promise.race([]) для очікування першово проміса, що виконався
 *  Promise.all([]) для очікування всіх промісів
 * 
 * determineWinner
 * updateWinnerField
 * updateProgressField
 * waitForAll
 * updateResultsTable
 */

// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };


// const promises = horses.map(horse => run(horse))

// console.log(`🤖 Заїзд розпочався, ставки не приймаються!`);

// Promise.race(promises).then(({horse, time})=>
//   console.log(`%c🎉 Переможець ${horse}, финишував за ${time}мс часу`,'color: green')
//   )

//   Promise.all(promises).then(()=>{
//     console.log(`📝 Заїзд закінчився, приймаються ставки.`);
//   })

//   function run (horse){
//     const time = getRandomTime(1500, 2500);
//     return new Promise(resolve=>{
//       setTimeout(
//         ()=>{
//         resolve({horse, time})
//       },
//       time)
//     })
//   }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


/**
 * 🤖 Заїзд розпочався, ставки не приймаються!
 * 🎉 Переможець ${horse}, финишував за ${time}мс часу
 * 📝 Заїзд закінчився, приймаються ставки.
 * 
 *  Promise.race([]) для очікування першово проміса, що виконався
 *  Promise.all([]) для очікування всіх промісів
 * 
 * determineWinner
 * updateWinnerField
 * updateProgressField
 * waitForAll
 * updateResultsTable
 */

// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.startBtn.addEventListener('click', onStart);



// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);

//   updateWinnerField('');
//   updateProgressField('🤖 Заїзд розпочався, ставки не приймаються!');
//   determineWinner(promises);
//   waitForAll(promises);
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`🎉 Переможець ${horse}, финишував за ${time}
//     времени`);
//     updateResultsTable({ horse, time, raceCounter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgressField('📝 Заїзд закінчився, приймаються ставки.');
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// // /*
// //  * Promise.race([]) для ожидания первого выполнившегося промиса
// //  */

// // /*
// //  * Promise.all([]) для ожидания всех промисов
// //  */

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

