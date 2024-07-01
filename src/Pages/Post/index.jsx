import { useParams } from "react-router-dom";

export function Post() {

    const parameters = useParams();
    console.log(parameters);

    return (
        <h1>Post... {parameters.id}</h1>
    );
}