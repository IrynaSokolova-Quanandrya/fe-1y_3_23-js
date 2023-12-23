/*
 * Оператор розгалуження if
 */
// console.log('До if');

if('0'){
    console.log('В середині if');
}

// console.log('Після if');

/*
 * Оператор розгалуження if...else
 */

let totalPrice;
const quantity = 6;
const price = 150;

// if (quantity >= 5) {
//     totalPrice = price * quantity;
//     alert(totalPrice);
// } else {
//     alert('Кількість товару менше ніж треба!')
// }

// alert('Алерт після операції');


/*
 * Оператор розгалуження else...if
 */

const salary = 3500;

if(salary >= 1000 && salary < 2000){
    console.log('Ви на 1 рівні');
} else if (salary >= 2000 && salary < 3000) {
    console.log('Ви на 2 рівні');
} else if(salary >= 3000){
    console.log('Ви на 3 рівні');
} else {
    console.log('Жодна умова не виконалась');
}

console.log('код після розгалуження else...if');




/*
 * Тернарний оператор
 */

// const salary = 5000;
// let message;

// if(salary <= 5000){
//    message = 'Ваша зп менше 5000!' ;   
// } else {
//    message = 'Ваша зп більше 5000!' ;
// }

// console.log(message);

// const message = salary <= 5000 ? 'Ваша зп менше 5000!' : 'Ваша зп більше 5000!';

// console.log(message);

