// import './css/common.css';
import castomer from "./js/castomer.json";
import book from './js/castomer.json'


const bookParsed = JSON.parse(book)
console.log(bookParsed);

const user = {
    name: 'Poly',
    age: 18,
    email: 'poly@ukr.net'
}
const userStr = JSON.stringify(user)

console.log('userStr:', userStr);

const userParsed = JSON.parse(userStr);

console.log('userParsed:', userParsed);

const str = 'Hello,world!'

console.log(JSON.parse(str));









