import React from "react";
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.contact}>Contact Link:
            <a href="https://github.com/Baut1"
                target="_blank"
                rel="noreferrer"
                className={styles.link}> Bautista Iglesias
            </a>
        </p>
    </footer>
);

export default Footer;