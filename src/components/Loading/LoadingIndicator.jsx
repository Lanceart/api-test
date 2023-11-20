import React from 'react';
import styles from './page.module.css';
const LoadingIndicator = ({ message }) => {
    return (
        <div className={styles.loadingContainer}>
            
            <div className={styles.loading}>Loading...</div>
        </div>
    );
};

export default LoadingIndicator;
