import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from '@json/posts.json';
import { ModelPost } from "@components/ModelPost";

import './Post.css';

export function Post() {

    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id)
    });

    return (
        <ModelPost
            coverPhoto={`/posts/${post.id}/capa.png`}
            title={post.title}
        >   
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </ModelPost>
    );
}