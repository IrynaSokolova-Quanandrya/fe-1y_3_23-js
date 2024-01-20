/*
 * Порахувати загальну суму покупок в корзині
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let totalSum = 0;

for (let number of cart) {
    //1 number = 54
    //2 number = 28
    //3 number = 105
    //4 .....
    //10 number = 90
    totalSum += number   
}
//  console.log('total: ', totalSum);

/*
 * Нипиши скрипт який порахує суму всіх парних чисел в масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for(let number of numbers){

// }

// console.log(numbers.length);

// console.log(total);

/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message = `Користувач ${loginToFind} не знайдено.`  ;

for(let login of logins){
    if(login === loginToFind){
        message = `Користувач ${loginToFind} знайдено.`
        break;
    } 
}

// console.log(message);

/*
 * Напиши скрипт пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0]

for (let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] < smallestNumber ){
        smallestNumber = numbers[i]
    }
}

console.log(smallestNumber);




// console.log(smallestNumber);