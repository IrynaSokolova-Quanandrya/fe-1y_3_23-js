// Тернарний оператор
const userName = 'Poly';
let message;

// if(userName === 'Poly'){
//     message = 'Hello, Poly';
// } else {
//     message = 'Unknown userName'
// }

message = userName === 'Poly' ? 'Hello, Poly' : 'Unknown userName';

// умова ? правдива умова : якщо умова неправдива

// console.log(message);//'Hello, Poly'




/*
 * Напиши скрипт вибору готеля по кількості зірок.
 * 1,2 - 20$,  
 * 3,4 - 50$,  
 * 5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Токої кількості зірок немає'
 */

const stars = 1;
let price;

// if( stars === 1){
//     price = 10
//     console.log(`Ціна за номер в готелі ${price}$`);
// } else if (stars === 2){
//     price = 20
//     console.log(`Ціна за номер в готелі ${price}$`);
// } else if (stars === 3){
//     price = 30
//     console.log(`Ціна за номер в готелі ${price}$`);
// } else if (stars === 4){
//     price = 50
//     console.log(`Ціна за номер в готелі ${price}$`);
// } else if (stars === 5){
//     price = 120
//     console.log(`Ціна за номер в готелі ${price}$`);
// } else {
//     console.log('Токої кількості зірок немає');
// }

// switch (stars) {
//     case 1:
//     case 2: 
//         price = 20
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;
//     case 3, 4: 
//         price = 50
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break; 
//     case 5: 
//         price = 120
//         console.log(`Ціна за номер в готелі ${price}$`);
//         break;

//     default: 
//     console.log('Токої кількості зірок немає');
//         break;
// }

const a = 5;

if(true){
    const b = 10;
    const a = 15;
    console.log(b);
    console.log(a);
}

console.log(a);
// console.log(b);







/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивоз, 2 - кур"єр, 3 - пошта
 *
 * В змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонит менеджер'
 */

// 1 створюємо змінні
// const option = 5;
// let message = '';

// 2. робимо світч
// 3. перевіряємо на рівність опцію і виводимо повідоилення
// switch (option) {
//     case 1:      
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//         console.log(message);
//         break;
//     case 2:
//         message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//         console.log(message);
//         break;
//     case 3:
//         message = 'Посилка буде відправлена сьогодні';
//         console.log(message);
//         break;
// // 4. дефолтне повідомлення
//     default:
//         message = 'Вам передзвонит менеджер';
//         console.log(message);
//         break;
// }