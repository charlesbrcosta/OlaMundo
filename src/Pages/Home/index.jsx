import { PostCard } from "@components/PostCard";

import styles from './Home.module.css';
import posts from '@json/posts.json';

export function Home() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}