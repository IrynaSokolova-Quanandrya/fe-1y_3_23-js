/**
 * LocalStorage - місце для зберігання не приватної тимчасової інформації
 * Записати, прочитати, видалити дані з localStorage
 * 
 */

localStorage.setItem('name', 'Ira')
localStorage.setItem('age', 15)

const localStorageData = localStorage.getItem('age')
console.log(localStorageData);

const user = {
    name: 'Bob',
    age: 15
}
 

localStorage.setItem('user', JSON.stringify(user))

const userData = localStorage.getItem('user')
console.log(userData);

const parsedUserDate = JSON.parse(userData)
console.log(parsedUserDate);

localStorage.removeItem('value')