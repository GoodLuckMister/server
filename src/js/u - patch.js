const BASE_URL = 'http://localhost:3000/';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}books/${bookId}`, options).then(res => res.json());
}

updateBookById({ title: 'Самая лучшая книга по JS' }, 6);

updateBookById({ rating: 10 }, 8);
