import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export default function PostCard ({post}) {
    
    return (

        <Link to={`/post/${post.id}`} >
        <div className={styles.post}>
            <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='capa' />

            <h2 className={styles.titulo}>{post.titulo}</h2>
            
            <button className={styles.botaoLer}> ler </button>
            
        </div>
        </Link>
        
    )
}