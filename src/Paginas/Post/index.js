import './Post.css';
import styles from './Post.module.css'
import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json'
import PostModelo from "Componente/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontra from 'Paginas/NaoEncontrada';
import PaginaPadrao from 'Paginas/PaginaPadrao';
import PostCard from 'Componente/PostCard';
export default function Post(){
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post){
        return <NaoEncontra/>
    }

    const postRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a,b) => b.id - a.id)
    .slice(0,4);

    return (
   <PaginaPadrao>
            <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
            >
             <div className="post-markdown-container">
             <ReactMarkdown>
                 {post.texto}
             </ReactMarkdown>
         
             </div>
             <h2 className={styles.titulosOutrosPosts}>
                Outros posts que você pode gostar:
             </h2>

            <ul className={styles.postsRecomendados}>
                {postRecomendados.map((post) =>
                (<li key={post.id}>
                    <PostCard post={post}/>
                </li>))}

            </ul>
            </PostModelo>

   </PaginaPadrao>
      
    )
}