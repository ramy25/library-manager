import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={styles['footer-madeby']}>
        Simple library manager made by <a href="#">Ramy</a>
      </p>
    </footer>
  );
};

export default Footer;
