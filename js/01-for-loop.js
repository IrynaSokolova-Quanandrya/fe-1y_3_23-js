/*
 * Цикл for
 */

// for (ініціалізація; умова; пост-вираз) {
//    тіло
// }



/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */

// 1. Створити змінні employees, totalSalary
const employees = 4;
let totalSalary = 0;
const minSalary = 500;
const maxSalary = 5000;

// 2. пройтися по зп працівників n кількість разів
for (let i = 1; i <= employees; i += 1){

    // 3. згенерувати для кожного працівника зп
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)

    // 4. додати зп кожного працівника
    totalSalary += salary;
}
// 5. вивести totalSalary в консоль
// console.log(`Загальна ЗП ${employees} робітників: `, totalSalary);

/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */

// 1.створити змінні max, min, total
const min = 1;
const max = 9;
let total = 0;

// 2.запустити цикл в діапазоні від min до max
for (let i = min; i <= max; i += 1){
    // 3.на кожній ітерації зробити перевірку на парність числа

    if (i % 2 === 0) {
        // 4.якщо число парне додати його в total
        // console.log('парне число: ', i);
        total += i
    }
}

// console.log(total);


for (let i = 0; i <= 10; i+=1) {
  
    console.log(i);
    if (i === 5) {
        console.log("зупиняємо виконання ітерації цикл: ", i);
        continue;
         console.log("зупиняємо цикл: ", i);
    }
    
}





// console.log('total: ', total);

// for(let i = min; i <= max; i += 1){
// console.log(i);
//     if(i === 10){
//         console.log(i);
//         break;
//     }
// }

2/2 //1
8/2 //4
3/2 //1.5
2%2 //0
3%2 //1
8%2 //0



// Інструкції break та continue


// let num = 3;
//         while (num) {
//             console.log(num);
//             num -= 1;
//         }
// let age = 0;

//         do {
//             console.log(age);
//             age += 1    
//           } while (age <=18); 
    


 


//   for (let age = 0; age <= 18; age += 1) {   
//     console.log(age);   
// }
