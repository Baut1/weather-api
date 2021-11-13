import React from "react";
import styles from './Header.module.css';

const Header = () => (
    <nav className={styles.heading} >
        
        <a href="/" className={styles.logo} >
            <button className={styles.emoji}>&#9925;</button>
            El Tiempo, Ahora
            <button className={styles.emoji}>&#9925;</button>
        </a>
        
    </nav>
    
);

export default Header;