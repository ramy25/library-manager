import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const Nav = (props) => {
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
        <a href="#library" id="library" onClick={navHandler}>
          Library
        </a>
      </li>
      <li className={navActive === 'borrowed' ? styles['active'] : ''}>
        <a href="#borrowed" id="borrowed" onClick={navHandler}>
          Borrowed Books
        </a>
      </li>
    </ul>
  );
};

export default Nav;
