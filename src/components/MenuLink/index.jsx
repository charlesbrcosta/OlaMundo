import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';


export function MenuLink({ children, to }) {

    const location = useLocation();

    return (
        <Link
            className={`
                ${styles.link}
                ${location.pathname === to ? styles.highlightedLink : ''}   
            `} to={to}>
            {children}
        </Link>
    );
}