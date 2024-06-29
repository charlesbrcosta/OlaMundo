import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

export function Menu() {
    return(
        <header>
            <nav className={styles.navigation}>
                <Link className={styles.Link} to='/'>Inicio</Link>
                <Link className={styles.Link} to='/about'>Sobre mim</Link>
            </nav>
        </header>
    );
}