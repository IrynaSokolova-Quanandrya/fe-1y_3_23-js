const BASE_URL = 'http://localhost:3000';

const newMovie1 = {
      title: "CSS",
      director: "CSS",
      genres: [
        "Comedy"
      ],
      rating: 8
}

function createMovie(newMovie) {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newMovie)
      }

  return fetch(`${BASE_URL}/movies`, options)
    .then(response => response.json())
}

createMovie(newMovie1)
createMovie({
      title: "HTMT",
      director: "HTMT",
      genres: [
        "Comedy"
      ],
      rating: 8
})









// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// }).then(renderBook);

// function renderBook(book) {
//   console.log('Пришел ответ от бекенда можно рисовать');
//   console.log(book);
// }
