/*
 * Створення промісу
 *  - Клас Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 *  - catch()
 *  - then()
 *  - finally() 
 * - 'https://pokeapi.co/api/v2/pokemon/5'
 */
// [5, 12, 11, 57]

// 10 % 2 === 0 
// 11 % 2 // 1
// 13 % 5 // 3

// const promise = new Promise((resolve, reject) => {
//     const isFullfild = Math.random() > 0.5
    
//     if (isFullfild) {

//       resolve(10)
//     }
//     reject('Error')
// })

const promise = new Promise((resolve, reject) => {
    const numbers = [2, 5, 8, 16]
   const isFulfilld = numbers.every((number)=>{return number % 2 === 0 })
    if (isFulfilld){
        resolve('числа в масиві є парнимі')
    }
    reject('числа в масиві не є парнимі')
})

// console.log(promise);

promise
    .then((result) => {
        console.log(result) 
        return result
    })
    .then((data)=>{console.log(data)})
    .catch((error) => { console.log(error) })
    .finally(() => { console.log('Це кінцевий результат який виконається в будь-якому випадку') })









// console.log(promise);
// promise
//   .then(result => {
//     console.log('result: ', result)
//     return 5
//   })
//   .then(data => {
    
//     console.log(data)
//     return data
//   })
//   .then(res => console.log(res))
//   .catch(error => console.log(error))
//   .finally(()=>{console.log('Я виконуюсь завжди');})














// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }








/*
 * Ланцюжки Промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаний в любому випадку'));



