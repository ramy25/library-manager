import Card from '../Card/Card';
import BookVersions from '../BookVersions/BookVersions';
import styles from './Books.module.css';

const BooksLibrary = (props) => {
  const showLibraryOrBorrowed = props.showContent === 'library' ? false : true;

  const availableBooks = props.books.filter(
    (book) => book.borrowed === showLibraryOrBorrowed
  );

  availableBooks.sort((a, b) => a - b);

  const booksGroupedBySSN = availableBooks.reduce(
    (groups, book) => ({
      ...groups,
      [book.isbn]: [...(groups[book.isbn] || []), book],
    }),
    {}
  );

  return (
    <Card className={styles['books-card']}>
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
    </Card>
  );
};

export default BooksLibrary;
