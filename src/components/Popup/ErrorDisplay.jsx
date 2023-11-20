
import styles from './page.module.css';
const ErrorDisplay = ({ message }) => {
    return (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Opps... Something is wrong</h2>
            <p>Please refresh the page or check the right url again</p>
            <p>{message}</p>
          </div>
        </div>
      );
    
};

export default ErrorDisplay;
