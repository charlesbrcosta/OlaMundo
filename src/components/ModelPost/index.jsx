import styles from './ModelPost.module.css';

export function ModelPost({ children, coverPhoto, title }) {
    return(
        <article className={styles.modelPostContainer}>
            <div 
                className={styles.coverPhoto}
                style={{ backgroundImage: `url(${coverPhoto})` }}
            ></div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.contentPostContainer}>
                {children}
            </div>
        </article>
    );
}