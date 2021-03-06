import Button from '../../Button/Button';
import styles from './BookVersions.module.css';

const BookVersions = ({ books, borrowBook, returnBook }) => {
  return (
    <ul className={styles['book-versions']}>
      {books.map((book) => {
        return (
          <li
            key={book.id}
            className={book.overdue ? styles['book-overdue'] : ''}
          >
            <p className={styles['book-name']}>Book Name: {book.name}</p>
            <p className={styles['book-price']}>
              Book Price: {book.price}&euro;
            </p>

            {!book.borrowed ? (
              <Button onClick={() => borrowBook(book.id)}>Borrow</Button>
            ) : (
              <Button onClick={() => returnBook(book.id)}>Return</Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BookVersions;
