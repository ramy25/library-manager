import { useState } from 'react';

import Card from '../../Card/Card';
import Button from '../../Button/Button';

import styles from './Bookform.module.css';

const isbnPattern = /^(?=(?:\D*\d){13}(?:(?:\D*\d){3})?$)[\d-]+$/;

const BookForm = (props) => {
  const [bookName, setBookName] = useState('');
  const [bookIsbn, setBookIsbn] = useState('');
  const [bookPrice, setBookPrice] = useState('');

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
      props.setError({
        title: 'Name field is empty!',
        message: 'Please enter a name!',
      });
      return;
    }

    if (!isbnPattern.test(bookIsbn)) {
      props.setError({
        title: 'Invalid ISBN!',
        message:
          'A valid ISBN is made of 13 digits, divided in 5 sets of numbers, separated by "-"',
      });
      return;
    }

    if (bookPrice === '' || +bookPrice <= 0) {
      props.setError({
        title: 'Invalid price!',
        message: 'Please add a price higher than 0!',
      });
      return;
    }

    props.addBookHandler(bookName, bookPrice, bookIsbn);

    clearInputs();
  };

  return (
    <Card>
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
        <label htmlFor="price">Price &euro;</label>
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
