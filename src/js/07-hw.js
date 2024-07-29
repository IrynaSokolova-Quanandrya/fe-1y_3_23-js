// 2
// const box = document.querySelector('.box');
// let width = 50;

// const intervalId = setInterval(() => {
//   width += 10;
//   box.style.width = `${width}px`;
//   box.style.height = `${width}px`;
  
//   if (width >= 150) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// 3
// const target = document.querySelector('.target');
// const scoreDisplay = document.getElementById('score');
// let score = 0;

// target.addEventListener('click', () => {
//   score++;
//   scoreDisplay.textContent = score;
// });

// const interval = setInterval(() => {
//   target.style.top = `${Math.random() * 90}vh`;
//   target.style.left = `${Math.random() * 90}vw`;
// }, 1000);

// 4
// const timeInput = document.getElementById('time-input');
// const startButton = document.getElementById('start-button');

// startButton.addEventListener('click', () => {
//   const timeInSeconds = parseFloat(timeInput.value);
//   if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
//     alert('Будь ласка, введіть коректний час у секундах.');
//     return;
//   }

//   setTimeout(() => {
//     alert('Час вийшов!');
//   }, timeInSeconds * 1000);
// });

function getYear(date) {
    
    return date.getFullYear(date);
}
console.log(new Date());
console.log(new Date().getTime());
console.log(Date.now());
console.log(getYear(new Date()));