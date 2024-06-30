import styles from './Banner.module.css';
import coloredCircle from '@assets/circulo_colorido.png';

export function Banner() {

    return(
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nostrum explicabo mollitia incidunt perferendis. Quaerat dolorum illo necessitatibus facere? Nam dolorem debitis eos doloribus animi sed mollitia labore neque tenetur.
                </p>
            </div>

            <div className={styles.image}>
                <img 
                    className={styles.coloredCircle}
                    src={coloredCircle}
                    aria-hidden={true}
                />  

                <img 
                    className={styles.myPhoto}
                    src='https://www.github.com/charlesbrcosta.png'
                    alt='Foto de Vetorizada caricatura Charles Bruno'
                />
            </div>
        </div>
    );
}