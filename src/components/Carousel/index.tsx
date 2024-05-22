import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SummaryCard from '../SummaryCard/index';
import styles from './index.module.css';

interface Card {
    id: number;
    image: string;
    title: string;
    description: string;
    subtitle?: string;
    platforms?: string[];
    critics: number;
    appearances?: string;
}

interface CarouselProps {
    cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastVisibleIndex, setLastVisibleIndex] = useState<number>(0);
    const numCards = cards.length;

    useEffect(() => {
        const calculateLastVisibleIndex = () => {
            const visibleCardsCount = Math.floor(window.innerWidth / 262);
            const lastIndex = Math.min(currentIndex + visibleCardsCount - 1, numCards - 1);
            setLastVisibleIndex(lastIndex);
        };

        calculateLastVisibleIndex();
        window.addEventListener('resize', calculateLastVisibleIndex);

        return () => {
            window.removeEventListener('resize', calculateLastVisibleIndex);
        };
    }, [currentIndex, numCards]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % numCards);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + numCards) % numCards);
    };

    return (
        <main className={styles.main}>
            <motion.div className={styles.card_carousel}>
                <motion.div className={styles.inner} style={{ transform: `translateX(-${currentIndex * 262}px)` }}>
                    {cards.map((card, index) => (
                        <motion.div key={index} className={styles.item}>
                            <SummaryCard
                                id={card.id}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                subtitle={card.subtitle}
                                platforms={card.platforms}
                                critics={card.critics}
                                appearances={card.appearances}
                                isFirstElement={index === 0}
                                isLastVisible={index === lastVisibleIndex}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <button className={styles.prevBtn} onClick={prevSlide}>&#10094;</button>
            <button className={styles.nextBtn} onClick={nextSlide}>&#10095;</button>
        </main>
    );
};

export default Carousel;
