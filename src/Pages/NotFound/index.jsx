import { Button } from '@components/Button';
import styles from './NotFound.module.css';

import dogImage from '@assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export function NotFound() {

    const navigate = useNavigate();
    const go_back = -1;

    return(
        <>
            <div className={styles.containerContent}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Ops! Página não encontrada.</h1>
                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div 
                    className={styles.containerButton}
                    onClick={() => navigate(go_back)}
                >
                    <Button size='lg'>
                        Voltar
                    </Button>
                </div>

                <img 
                    className={styles.dogImage}
                    src={dogImage}
                    alt='Cachorro de óculos e vestido igual a um humano.'
                />
            </div>

            <div className={styles.blankSpace}></div>
        </>
    );
}