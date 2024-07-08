// import './css/common.css';

const user = {
    name: 'Poly',
    age: 18,
    email: 'poly@ukr.net'
}

console.log(user);


const userJson = JSON.stringify(user)
console.log(userJson);

const user2 = JSON.parse(userJson)

console.log(user2);