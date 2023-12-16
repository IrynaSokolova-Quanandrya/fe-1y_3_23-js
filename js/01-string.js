/**
 * У кожного рядка є вбудовані властивості і методи, розглянемо деякі з них.
    length — властивість, зберігає довжину рядка
    toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
    indexOf() — поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
    includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
    str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.
    trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
    padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. 
        Відступ застосовується з кінця/початку поточного рядка.
 */
/*
 * Довжина рядка, влістивість length
 */
const message = 'В цьому рядку 26 символів.';
// console.log(message.length);
// console.log(message.indexOf('рп'));//-1

/*
 * Конкатенація рядків
 */

const firstName = 'Ira';
const lastName = 'Sokolova';
const fullname = `Hello, ${firstName} ${lastName}!`;
// console.log(fullname);


/*
 * Напиши скрипт який виведе рядок в форматі:
 * «Гість x y поселяється в g номер q»,
 * підставив замість x y g q значення змінних
 */
// const firstName = 'Mango';
// const lastName = 'Lee';
// const room = 716;
// const type = 'VIP';
// const customersMsg = 'Гість a b заселяється в v номер h';




// toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок

const str = 'Рядок ноPмалізації букв';
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false

// console.log(str.includes(' '));//true або false

// str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.

// console.log(str.startsWith('Р'));
// console.log(str.endsWith('р'));

// trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
const userName = 'Mango'
// console.log(name.trim().length);

// padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. 
// Відступ застосовується з кінця/початку поточного рядка.
// console.log(userName.length);
const greet = userName.padEnd(8, '!')

// console.log(greet);