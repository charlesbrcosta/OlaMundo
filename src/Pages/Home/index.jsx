import { Banner } from "@components/Banner";
import { Post } from "@components/Post";

import styles from './Home.module.css';
import posts  from '@json/posts.json';

export function Home() {
    return(
        <main>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    );
}