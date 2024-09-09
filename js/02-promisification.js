/*
 * Промісифікація:
 * - Поблема доступу до результату проміса з колбеком
 * - Функція яка повертає проміс
 */

const food = [  
  'burger',
  'pizza',
  'pasta', 
  'french fries'
]
console.log('food ', food);

const newFood = food.map((dish)=>{return `${dish} - 100$`})

console.log('newFood ', newFood);








const promises = food.map(dish => makeOrder(dish))
console.log(promises);

Promise.all(promises).then(res=>console.log(res))
Promise.race(promises).then(res=>console.log(res))
Promise.any(promises).then(res=>console.log(res))



/**
 * 
 * Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.} ms 
 */
// const delay = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms)
//     }, ms)
//   })
// };
// ​
// const logger = time => console.log(`Resolved after ${time}ms`);
// ​
// // Виклич функції для перевірки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


// function makeOrder(dish) {
//   const promise = new Promise((resolve, reject) => {
//     const isFullfild = Math.random() > 0.5
    
//     if (isFullfild) {
//       resolve(`Ваше замовлення: ${dish} - виконано успішно!`)
//     }
//     reject(`Вибачте! В меню такої страви як ${dish} немає`)
//   })
//   return promise
// }




// makeOrder('pizza')
//   .then(res => console.log(res))
//   .catch(error=>console.log(error))












// const pokemon = {
//     name: 'Bulbazaur',
//     skills: ['khjhg', 'hvhvh', 'poi'],
//     weight: 5
// }

// const promise = new Promise((resolve, reject) => {
//     resolve(pokemon)
    
// })

// // promise
// //     .then(pokemon => {return pokemon.skills })//promise
// //     .then(skills => { skills.map() })//


// function makeOrder(dish) {      
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
        
//         if (passed) {
//             resolve(`✅ Ваше замовлення: ${dish}`)
//         }
//         reject('❌ Упс, у нас закінчились продукти')
//     })
// }
    
// makeOrder('Burger').then(dish => console.log(dish))

// const delay = ms => {
//   // Твій код
// };
// ​
// const logger = time => console.log(`Resolved after ${time}ms`);
// ​
// // Виклич функції для перевірки
// delay(2000).then((time) => { logger (time)}); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms




// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];
// ​
// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
// ​
 
// };
// ​
// const logger = updatedUsers => console.table(updatedUsers);
// ​
// /*
//  * Зараз працює так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux', logger);
// ​
// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);



// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];
// ​
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
// ​
//   callback(updatedUsers);
// };
// ​
// const logger = updatedUsers => console.table(updatedUsers);
// ​
// /*
//  * Зараз працює так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
// ​
// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);




// // const makeOrder = dish => {
// //   const DELAY = 1000;

// //   return new Promise((resolve, reject) => {
// //     const passed = Math.random() > 0.5;

// //     setTimeout(() => {
// //       if (passed) {
// //         resolve(`✅ Ваше замовлення: ${dish}`);
// //       }

// //       reject('❌ Упс, у нас закінчились продукти');
// //     }, DELAY);
// //   });
// // };



// // function onMakeOrderSuccess(result) {
// //   console.log('onMakeOrderSuccess');
// //   console.log(result);
// // }

// // function onMakeOrderError(error) {
// //   console.log('onMakeOrderError');
// //   console.log(error);
// // }

// /*
//  * Промісифікація «синхронных» функций
//  * - Promise.resolve()
//  * - Promise.reject()
//  */

// // const makeOrder = dish => {
// //   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// // };

// /*
//  * Покемоны с https://pokeapi.co/
//  */

// // const fetchPokemonById = id => {
// //   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// // };

// // fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// // fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// // fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// // function onFetchSuccess(pokemon) {
// //   console.log('onFetchSuccess -> onFetchSuccess');
// //   console.log(pokemon);
// // }

// // function onFetchError(error) {
// //   console.log('onFetchError -> onFetchError');
// //   console.log('Это в блоке catch');
// //   console.log(error);
// // }

// // makePromise
// // const makePromise = () => {
// //   return new Promise((resolve, reject) => {
// //     const passed = Math.random() > 0.5;

// //     setTimeout(() => {
// //       if (passed) {
// //         resolve('✅ Куку це resolve');
// //       }

// //       reject('❌ все пропало це reject');
// //     }, 2000);
// //   });
// // };

// // makePromise()
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error));



