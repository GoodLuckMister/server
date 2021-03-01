const BASE_URL = 'http://localhost:3000/';

function deleteBook(bookId) {
  const url = `${BASE_URL}books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}
deleteBook(7);
