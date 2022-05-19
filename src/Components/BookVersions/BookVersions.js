import Button from '../Button/Button';
import styles from './BookVersions.module.css';

const BookVersions = (props) => {
  return (
    <ul className={styles['book-versions']}>
      {props.books.map((book) => {
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
              <Button onClick={() => props.borrowBook(book.id)}>Borrow</Button>
            ) : (
              <Button onClick={() => props.returnBook(book.id)}>Return</Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BookVersions;
