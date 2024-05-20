import React, { useState } from 'react';
import styles from './index.module.css';
import Header from '../../components/Header/index';
import CharacterSummaryCard from '../../components/CharacterSummaryCard';
import spider from '../../assets/img/spider.png';
import Thanos from '../../assets/img/Thanos.png';
import wanda from '../../assets/img/wanda.png';
import hulk from '../../assets/img/ativo-11.png';
import { motion } from 'framer-motion';

const Filmes: React.FC = () => {
    const cardsCharacter = [
        { image: spider, title: 'Homem-Aranha', description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha." },
        { image: wanda, title: 'Wanda Maximoff', description: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos." },
        { image: Thanos, title: 'Thanos', description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais." },
        { image: hulk, title: 'Hulk', description: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar." }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cardsCharacter.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cardsCharacter.length) % cardsCharacter.length);
    };

    // const transformValue = `translateX(-${currentIndex * 800}px)`;
    return (
        <>
            <Header />
            <main className={styles.main}>
                <motion.div className={styles.card_carousel}>
                    <motion.div className={styles.inner} style={{ transform: `translateX(-${currentIndex * 262}px)` }} >
                        {cardsCharacter.map((card, index) => (
                            <motion.div
                                key={index}
                                className={styles.item}
                            >
                                <CharacterSummaryCard
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
                <button className={styles.prevBtn} onClick={prevSlide} disabled={currentIndex === 0}>&#10094;</button>
                <button className={styles.nextBtn} onClick={nextSlide} disabled={currentIndex === cardsCharacter.length - 1}>&#10095;</button>

            </main >
        </>
    );
};

export default Filmes;
