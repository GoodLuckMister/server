const BASE_URL = 'http://localhost:3000/';

const newBook = {
  title: 'Тестовая книга 33',
  author: 'я',
  genres: ['Обучение'],
  rating: 8.34,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}books`, options)
    .then(res => res.json())
    .then(console.log);
}
addBook(newBook);
addBook(newBook);
