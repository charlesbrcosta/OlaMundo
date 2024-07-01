import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export function PostCard({ post }) {

    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.cape}
                    src={`./posts/${post.id}/capa.png`}
                    alt={`Capa do post ${post.id}`}
                />   
                <h2 className={styles.title}>{post.title}</h2>  
                <button className={styles.readButton}>Ler</button>       
            </div>
        </Link>
    );
}
