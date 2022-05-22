import { useState } from 'react';
import { DUMMY_LIBRARY } from '../../dummy_library';
import { dateToIsoFormat, daysBetween } from '../../helperFunctions';

import BookForm from './BookForm/Bookform';
import Books from './Books/Books';
import Nav from './Nav/Nav';

import ErrorModal from '../../Components/ErrorModal/ErrorModal';

const BookPage = () => {
  const [books, setBooks] = useState(DUMMY_LIBRARY);
  const [showContent, setShowContent] = useState();
  const [error, setError] = useState();

  const errorHandler = () => {
    setError();
  };

  const addBookHandler = (name, price, isbn) => {
    setBooks((prevBooks) => {
      return [
        ...prevBooks,
        {
          name: name,
          price: price,
          isbn: isbn,
          overdue: false,
          borrowed: false,
          borrowedDate: null,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const borrowBook = (bookId) => {
    let availableBooks = [...books];
    let bookIndex = availableBooks.findIndex((book) => book.id === bookId);

    availableBooks[bookIndex]['borrowed'] = true;
    availableBooks[bookIndex]['borrowedDate'] = dateToIsoFormat(new Date());

    setBooks(availableBooks);
  };

  const payOverdue = (borrowedDate, bookPrice) => {
    const todayDate = dateToIsoFormat(new Date());
    const nrOfOverdueDays = daysBetween(borrowedDate, todayDate) - 14;
    const penaltyPrice = 0.01 * bookPrice;

    const payment = nrOfOverdueDays * penaltyPrice + bookPrice;

    setError({
      title: `You were ${nrOfOverdueDays} days late!`,
      message: `You just paid a total of ${payment}€, including overdue penalties`,
    });
  };

  const returnBook = (bookId) => {
    let availableBooks = [...books];
    let bookIndex = availableBooks.findIndex((book) => book.id === bookId);

    if (availableBooks[bookIndex]['overdue']) {
      payOverdue(
        availableBooks[bookIndex]['borrowedDate'],
        availableBooks[bookIndex]['price']
      );
    }

    availableBooks[bookIndex]['borrowed'] = false;
    availableBooks[bookIndex]['overdue'] = false;
    availableBooks[bookIndex]['borrowedDate'] = null;

    setBooks(availableBooks);
  };

  const switchContentHandler = (contentToShow) => {
    setShowContent(contentToShow);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Nav switchContentHandler={switchContentHandler} />
      <BookForm setError={setError} addBookHandler={addBookHandler} />
      <Books
        books={books}
        showContent={showContent}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};

export default BookPage;
