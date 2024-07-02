import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { NotFound } from "../NotFound";
import { ModelPost } from "@components/ModelPost";
import { DefaultPage } from "@components/DefaultPage";
import { PostCard } from "@components/PostCard";

import posts from '@json/posts.json';

import './Post.css';
import styles from './Post.module.css';



export function Post() {

    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id)
    });

    if (!post) {
        return <NotFound />
    }

    const recommendedPosts = posts
        .filter(post => post.id !== Number(parameters.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <DefaultPage>
            <ModelPost
                coverPhoto={`/posts/${post.id}/capa.png`}
                title={post.title}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>
                <h2 className={styles.titleOtherPosts}>
                    Outros posts que você pode gostar:
                </h2>
                <ul className={styles.recommendedPosts}>
                    {recommendedPosts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
            </ModelPost>
        </DefaultPage>
    );
}