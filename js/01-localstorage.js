/**
 * LocalStorage - місце для зберігання не приватної тимчасової інформації
 * Записати, прочитати, видалити дані з localStorage
 * 
 */

const student={
    name: "Viktor",
    age:19,
    location: 'Kharkiv'
}

console.log(localStorage);

localStorage.setItem("student", JSON.stringify(student))

const storageKey = localStorage.getItem("student")
console.log(JSON.parse(storageKey));

// localStorage.removeItem("data")