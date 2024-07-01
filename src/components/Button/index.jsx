import styles from './Button.module.css';

export function Button({ children, size }) {
    return(
        <div >
            <button className={`
                ${styles.button}
                ${styles[size]}
            `}>
                {children}
            </button>
        </div>
    ); 
}