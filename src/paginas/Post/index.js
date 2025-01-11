import { Route, useParams,Routes } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import './Post.css'
import NaoEncontrada from "Componentes/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import PostCard from "Componentes/PostCard";
import styles from "./Post.module.css";


export default function Post() {

    const parametros = useParams();

    const post = posts.find(post => post.id === Number(parametros.id));

    if (!post) {
        return (<NaoEncontrada />)
    }


    const postRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);




 console.log(postRecomendados);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={<PostModelo

                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}>


                    <div className="post-markdown-container" >
                        <ReactMarkdown>{post.texto}</ReactMarkdown>
                    </div>


                    <h2 className={styles.tituloOutrosPosts}> 
                        Outros Posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postRecomendados.map(post => (
                            <li key={post.id}>
                               <PostCard post={post}/>
                            </li>
                        ))}
                    </ul>

                </PostModelo>} />
            </Route>
        </Routes>

    )
}