import { ModelPost } from "@components/ModelPost";
import coverPhoto from '@assets/sobre_mim_capa.png'

import styles from './About.module.css';

export function About() {
    return(      
        <ModelPost
            coverPhoto={coverPhoto}
            title="Sobre mim"
        >
            <h3 className={styles.subtitle}>
                Olá, eu sou o Bruno!
            </h3>

            <img 
                className={styles.photoAboutMe}
                src='https://www.github.com/charlesbrcosta.png'
                alt='Foto Vetorizada do Bruno'
            />
            <p className={styles.paragraph}>
                Oi, tudo bem? Eu sou Aluno do curso de formação Front-end T6 - ONE na Alura em parceria com a Oracle Next One.
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia commodi id dolorum. Accusantium excepturi maxime perspiciatis, illo harum autem ratione doloremque non vel voluptatum quod consequuntur aperiam iste soluta!
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia commodi id dolorum. Accusantium excepturi maxime perspiciatis, illo harum autem ratione doloremque non vel voluptatum quod consequuntur aperiam iste soluta!
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia commodi id dolorum. Accusantium excepturi maxime perspiciatis, illo harum autem ratione doloremque non vel voluptatum quod consequuntur aperiam iste soluta!
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia commodi id dolorum. Accusantium excepturi maxime perspiciatis, illo harum autem ratione doloremque non vel voluptatum quod consequuntur aperiam iste soluta!
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia commodi id dolorum. Accusantium excepturi maxime perspiciatis, illo harum autem ratione doloremque non vel voluptatum quod consequuntur aperiam iste soluta!
            </p>

        </ModelPost> 
    );
}