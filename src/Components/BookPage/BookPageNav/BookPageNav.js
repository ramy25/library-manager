import { useEffect, useState } from 'react';
import styles from './BookPageNav.module.css';

const BookPageNav = (props) => {
  const [navActive, setNavActive] = useState('library');

  useEffect(() => {
    props.switchContentHandler(navActive);
  }, [navActive]);

  const navHandler = (e) => {
    setNavActive(e.target.id);
  };

  return (
    <ul className={styles['main-nav']}>
      <li className={navActive === 'library' ? styles['active'] : ''}>
        <button onClick={navHandler} id="library" type="button">
          Library
        </button>
      </li>
      <li className={navActive === 'borrowed' ? styles['active'] : ''}>
        <button onClick={navHandler} id="borrowed" type="button">
          Borrowed Books
        </button>
      </li>
    </ul>
  );
};

export default BookPageNav;
