const BASE_URL = 'http://localhost:3000';


async function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const result = await fetch(`${BASE_URL}/books/${bookId}`, options)
  const book = await result.json() 
  
    return book
}






// updateBookById({ title: 'Велика нова книга по NODEJS' }, 19);

// updateBookById({ rating: 1 }, 18);

// updateBookById({ rating: 4, author: 'Манго' }, 17);
