import { useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { DUMMY_LIBRARY } from './dummy_library';

import styles from './App.module.css';

const App = () => {
  const [books, setBooks] = useState(DUMMY_LIBRARY);
  const [showContent, setShowContent] = useState('library');

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
          id: Math.random().toString(),
        },
      ];
    });
  };

  const borrowBook = (bookId) => {
    let availableBooks = [...books];
    let bookIndex = availableBooks.findIndex((book) => book.id === bookId);

    availableBooks[bookIndex]['borrowed'] = true;

    setBooks(availableBooks);
  };

  const returnBook = (bookId) => {
    let availableBooks = [...books];
    let bookIndex = availableBooks.findIndex((book) => book.id === bookId);

    availableBooks[bookIndex]['borrowed'] = false;

    setBooks(availableBooks);
  };

  const switchContentHandler = (contentToShow) => {
    setShowContent(contentToShow);
  };

  console.log(books);

  return (
    <>
      <Header />
      <Main
        books={books}
        addBookHandler={addBookHandler}
        switchContentHandler={switchContentHandler}
        showContent={showContent}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
      <Footer />
    </>
  );
};

export default App;
