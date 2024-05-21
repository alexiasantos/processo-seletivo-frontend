import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface DetailCardProps {
    image: string;
    description: string;
    title: string;
    subtitle?: string;
    platforms?: string[];
    critics: number;
    appearances?: string;
    onClose: () => void;
    cardRef: React.RefObject<HTMLDivElement>;
    isFirstElement: boolean;
    isLastElement: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({ image, description, title, subtitle, platforms, critics, appearances, onClose, cardRef, isFirstElement, isLastElement }) => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            const cardRect = cardRef.current.getBoundingClientRect();
            setTop(cardRect.top - 290); // Adjust the offset as needed
            setLeft(cardRect.left);
        }
    }, [cardRef]);

    return (
        <div className={`${styles.detailCard} ${isFirstElement ? styles.firstElement : ''}`} style={{ top: `${top}px`, left: `${left}px` }}>
            <img className={styles.image_card} src={image} alt="Some Hero image" />
            <div className={styles.content}>
                <div className={styles.header_title}>
                    <h1 className={styles.title}>{subtitle ? `${title}: ${subtitle}` : title}</h1>
                </div>
                {appearances ? (
                    <p className={styles.appearances}>Aparições: {appearances}</p>
                ) : (
                    <p className={styles.description_card}>{description}</p>
                )}
                <label className={styles.label_streaming}>Disponível em streaming</label>
                {platforms && (
                    <div className={styles.platforms}>
                        {platforms.map((platform, index) => (
                            <img key={index} src={platform} alt={`Platform ${index}`} className={styles.platformImage} />
                        ))}
                    </div>
                )}
                <label className={styles.critics_label}>Crítica</label>
                <div className={styles.critics}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={index < critics ? styles.filledStar : styles.emptyStar}
                        />
                    ))}
                </div>
                <button className={styles.closeButton} onClick={onClose}></button>
            </div>
        </div>
    );
};

export default DetailCard;
