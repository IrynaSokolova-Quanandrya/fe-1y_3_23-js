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
const args = [
    {
        value: 'Hello',
        time: 1000
    },
    {
        value: 'Hi',
        time: 1500
    },
    {
        value: 'Ahoj',
        time: 2000
    }
]

const promises = args.map(arg=>delayedPromise(arg.value, arg.time))

// console.log(promises);

Promise.all(promises).then(console.log)

function delayedPromise(value, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, ms)
    })
}
delayedPromise('Hi', 1000)







// const promise = new Promise((resolve, reject) => {
//     resolve('hello')
// })


// console.log(promise);

// promise
//     .then((res) => {
//     console.log(res)
//         const text = document.createElement('h1')
//         console.log(text);
//         text.textContent = res
//         console.log(document);
//         document.body.append(text)
//     })
//     .catch((error) => { console.log(error) })







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

// const promise = new Promise((resolve, reject) => {
//     const numbers = [2, 5, 8, 16]
//    const isFulfilld = numbers.every((number)=>{return number % 2 === 0 })
//     if (isFulfilld){
//         resolve('числа в масиві є парнимі')
//     }
//     reject('числа в масиві не є парнимі')
// })

// // console.log(promise);

// promise
//     .then((result) => {
//         console.log(result) 
//         return result
//     })
//     .then((data)=>{console.log(data)})
//     .catch((error) => { console.log(error) })
//     .finally(() => { console.log('Це кінцевий результат який виконається в будь-якому випадку') })









// // console.log(promise);
// // promise
// //   .then(result => {
// //     console.log('result: ', result)
// //     return 5
// //   })
// //   .then(data => {
    
// //     console.log(data)
// //     return data
// //   })
// //   .then(res => console.log(res))
// //   .catch(error => console.log(error))
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



