import { useState } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';

import styles from './Bookform.module.css';

const isbnPattern = /^(?=(?:\D*\d){13}(?:(?:\D*\d){3})?$)[\d-]+$/;

const BookForm = (props) => {
  const [bookName, setBookName] = useState('');
  const [bookIsbn, setBookIsbn] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [error, setError] = useState();

  const errorHandler = () => {
    setError();
  };

  const bookNameChangeHandler = (e) => {
    setBookName(e.target.value);
  };

  const bookIsbnChangeHandler = (e) => {
    setBookIsbn(e.target.value);
  };

  const bookPriceChangeHandler = (e) => {
    setBookPrice(e.target.value);
  };

  const clearInputs = () => {
    setBookName('');
    setBookIsbn('');
    setBookPrice('');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (bookName === '') {
      setError({
        title: 'Name field is empty!',
        message: 'Please enter a name!',
      });
      return;
    }

    if (!isbnPattern.test(bookIsbn)) {
      setError({
        title: 'Invalid ISBN!',
        message:
          'A valid ISBN is made of 13 digits, divided in 5 sets of numbers, separated by "-"',
      });
      return;
    }

    if (bookPrice === '' || +bookPrice === 0) {
      setError({
        title: 'Invalid price!',
        message: 'Please add a price higher than 0!',
      });
      return;
    }

    if (bookIsbn) props.addBookHandler(bookName, bookPrice, bookIsbn);

    clearInputs();
  };

  return (
    <Card>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler} className={styles['book-form']}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={bookNameChangeHandler}
          value={bookName}
          placeholder="Book name..."
        />
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          onChange={bookIsbnChangeHandler}
          value={bookIsbn}
          placeholder="123-123-123-123-1..."
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          onChange={bookPriceChangeHandler}
          value={bookPrice}
          placeholder="100..."
        />
        <Button type="submit">Add Book</Button>
      </form>
    </Card>
  );
};

export default BookForm;
