import '../css/common.css';

/*
 - Створення new Date()
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date1 = new Date().toLocaleString()
// const date = Date.now()
// // 01.01.1970
// console.log('date: ', date);
// console.log('date1: ', date1);

// setTimeout(() => {
//     const date2 = new Date();

//     console.log('date1: ', date1);
//     console.log('date2: ', date2);

//     const deltaTime = date2 - date1;

//     console.log(deltaTime);

// }, 2000)

const date = function(){
    console.log(new Date(50000));
    return new Date(50000);
};
const result = date()

// 2. Створити функцію, яка приймає дату та повертає рік.

const year = function(date){
    console.log(date.getFullYear());
};
year(result)













// 1. Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра. Наприклад, якщо зараз є 23:00, то: getSecondsToTomorrow() === 3600

// function getSecondsToTomorrow() {
//     // Отримуємо поточний час
//     const now = new Date();
//     // Створюємо об'єкт для наступного дня, що починається о 00:00
//     const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//     // Обчислюємо різницю між "завтра о 00:00" і поточним часом у мілісекундах
//     const diff = tomorrow - now;
//     // Перетворюємо різницю з мілісекунд у секунди
//     return Math.floor(diff / 1000);
// }

// console.log(getSecondsToTomorrow());


// 2. Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.
// Параметри:
// year — чотиризначний рік, наприклад 2012.
// month — місяць, від 0 to 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

