import Card from '../../Card/Card';
import BookVersions from '../BookVersions/BookVersions';
import styles from './Books.module.css';

const Books = ({ showContent, books, borrowBook, returnBook }) => {
  const isLibrary = showContent === 'library' ? true : false;

  const availableBooks = books.filter((book) => book.borrowed === !isLibrary);

  const booksGroupsByIsbn = availableBooks.reduce(
    (groups, book) => ({
      ...groups,
      [book.isbn]: [...(groups[book.isbn] || []), book],
    }),
    {}
  );

  const isLibraryEmpty = Object.keys(booksGroupsByIsbn).length === 0;

  const emptyMessage =
    isLibraryEmpty && isLibrary ? (
      <h2>
        There are no books left to borrow. <br /> Come back later!
      </h2>
    ) : isLibraryEmpty && !isLibrary ? (
      <h2>
        There are no books left to return. <br /> Good Job!
      </h2>
    ) : (
      ''
    );

  return (
    <Card className={styles['books-card']}>
      {emptyMessage}
      {!isLibraryEmpty && (
        <ul>
          {Object.keys(booksGroupsByIsbn).map((books, index) => {
            return (
              <li key={index}>
                <h3>
                  There are #{booksGroupsByIsbn[books].length} books with ISBN{' '}
                  {books}
                </h3>
                <BookVersions
                  books={booksGroupsByIsbn[books]}
                  borrowBook={borrowBook}
                  returnBook={returnBook}
                />
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default Books;
