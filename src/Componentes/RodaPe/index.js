import styles from './RodaPe.module.css';
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg';

export default function RodaPe() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            <p>Feito com carinho por Antônio Evaldo</p>
        </footer>
    )
}