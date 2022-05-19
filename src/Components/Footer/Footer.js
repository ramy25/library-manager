import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={styles['footer-madeby']}>
        Simple library manager made by{' '}
        <a href="https://github.com/ramy25" target="_blank" rel="noreferrer">
          Ramy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
