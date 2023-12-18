/*
 * Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої 
 * суми за весь час (партнерська програма).
 *
 * - Загальна сума витрачених коштів зберігається в змінній totalSpent
 * - Сума поточного платежа зберігається в змінній payment
 * - Знижка зберігається в змінній discount
 *
 * - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
 * - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
 * - Якщо витрачено менше 100) - не партнер, знижка 0%
 *
 * - В результаті вивести повідомлення
 * «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»
 */



const totalSpent = 2000;
let payment = 500;
let discount = 0;



// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'