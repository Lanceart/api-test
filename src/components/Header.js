import React from 'react';
import styles from './page.module.css';
const Header = ({ message }) => {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>Clearviction Test Employee Lists</h1>  
        </div>
    );
};

export default Header;
