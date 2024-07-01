import styles from './Footer.module.css';
import registredMark from '@assets/marca_registrada.svg';

export function Footer() {
    return(
        <footer className={styles.footer}>
            <img 
                src={registredMark}
                alt='Marca registrada'
            />
            Desenvolvido por Alura.
        </footer>
    ); 
}