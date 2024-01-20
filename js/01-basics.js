
//  1(відбувається 2      3
//     один раз)
for(let i = 0; i < 5; i += 1){
//      3 - тіло циклу
}
/*
 * Знайомство з масивами
 * - Об`явлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

const num1 = 10;
const num2 = 25;

const myArray = [10, 25, 24, 12, 36];

// console.log(myArray[0]);

myArray[0] = 15;
myArray[10] = 100;

// console.log(myArray[0]);
// console.log(myArray);




/*
 * Передача по посиланню і по значенню
 * - Примітиви і складні типи данних
 * - Посисальна рівність (referential equality)
 */



/*
 * Перебор (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
 */

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];
// console.log(names[2]);

// names[2] = 'Anastasia';

// console.log(names[2]);
const matrix=[[5, 2, 60],[0, 10, 20],[15, 15, 15]]

// for(let i = 0; i <= names.length - 1; i += 1){
//        names[i] += '!'          
// }
// console.log(names);

// for (let name of names) {
//         // name += '!' 
//         // console.log(name);
// }
// console.log(names);



// Методи split() і join()
const str = 'Hello!';
const arrStr = str.split('')
// console.log(arrStr);

// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];


// const reversArr = names.join(', ')
// console.log(reversArr);

// Методи indexOf() і includes()

// Методи push(), pop(), shift(), unshift()

// names.push('Lera')
// console.log(names);
// names.pop()
// console.log(names);


// names.shift();
// console.log(names);
// names.unshift('Marko')
// console.log(names);

// Метод slice()
// const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

// const slicedNames = names.slice()
// console.log(slicedNames);

// Метод concat()
const arr1 = [5, 2, 6]

// const concatedArrs = names.concat(arr1, matrix)
// console.log(concatedArrs);

// Метод splice()

// splice(position, num)

const names = ['Ola', 'Petra', 'Nastia', 'Mary'];

//видалення
// const splicedName = names.splice(1,2)
// console.log(splicedName);

// додавання
// console.log(names.splice(4, 0, 'Marina', 'Egor'));
console.log(names);

//заміна
// names.splice(2, 1, 'Marina', 'Egor')
console.log(names);

