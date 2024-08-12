import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,

  start () {
    const startTime = Date.now(); 

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
                            
      const deltaTime = currentTime - startTime;

      console.log('deltaTime: ', deltaTime);
    },1000)
  },
  stop() {
        clearInterval(this.intervalId);
    }
}


refs.startBtn.addEventListener('click', () => {
  timer.start()
})








// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   /*
//    * - Приймає час в мілісекундах
//    * - Вираховує скільки в них вміщується годин/хвилин/секунд
//    * - Повертає об'єкт з властивостями hours, mins, secs
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Приймає число, приводить його в рядок і додає на початок 0 
//    * якщо число менше 2-х знаків
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// /*
//  * - Приймає час в міллісекундах
//  * - Вираховує скільки в них вміщується годин/хвилин/секунд
//  * - Малює інтерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
