import styles from './RodaPe.module.css';
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg';

export default function RodaPe() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            <p>desenvolvido por Alura   </p>
        </footer>
    )
}