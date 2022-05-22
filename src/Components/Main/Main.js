import BookPage from '../BookPage/BookPage';
import styles from './Main.module.css';

const Main = (props) => {
  return (
    <main>
      <div className={styles['main-content']}>
        <BookPage />
      </div>
    </main>
  );
};

export default Main;
