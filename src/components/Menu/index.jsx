import { MenuLink } from '@components/MenuLink';

import styles from './Menu.module.css';

export function Menu() {
    return(
        <header>
            <nav className={styles.navigation}>  
                <MenuLink to='/'>
                   Início
                </MenuLink>              
                <MenuLink to='/about'>                    
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    );
}