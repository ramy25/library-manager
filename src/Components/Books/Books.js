import Card from '../Card/Card';
import BookVersions from '../BookVersions/BookVersions';
import styles from './Books.module.css';

const BooksLibrary = (props) => {
  const isLibrary = props.showContent === 'library' ? true : false;

  const availableBooks = props.books.filter(
    (book) => book.borrowed === !isLibrary
  );

  const booksGroupedBySSN = availableBooks.reduce(
    (groups, book) => ({
      ...groups,
      [book.isbn]: [...(groups[book.isbn] || []), book],
    }),
    {}
  );

  const isLibraryEmpty = Object.keys(booksGroupedBySSN).length === 0;

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
          {Object.keys(booksGroupedBySSN).map((books, index) => {
            return (
              <li key={index}>
                <h3>
                  There are #{booksGroupedBySSN[books].length} books with ISBN{' '}
                  {books}
                </h3>
                <BookVersions
                  books={booksGroupedBySSN[books]}
                  borrowBook={props.borrowBook}
                  returnBook={props.returnBook}
                />
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default BooksLibrary;
