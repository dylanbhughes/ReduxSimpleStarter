export function selectBook(book) {
  console.log('Book selected', book);
  // selectBook is an action creator, it needs to return an action.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
