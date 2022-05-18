import BookForm from '../BookForm/Bookform';
import Books from '../Books/Books';
import Nav from '../Nav/Nav';
import styles from './Main.module.css';

const Main = (props) => {
  return (
    <main>
      <div className={styles['main-content']}>
        <Nav switchContentHandler={props.switchContentHandler} />
        <BookForm addBookHandler={props.addBookHandler} />
        <Books
          books={props.books}
          showContent={props.showContent}
          borrowBook={props.borrowBook}
          returnBook={props.returnBook}
        />
      </div>
    </main>
  );
};

export default Main;
