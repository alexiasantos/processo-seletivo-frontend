import React, { useState, useRef } from 'react';
import styles from './index.module.css';
import DetailCard from '../DetailCard';

interface MyComponentProps {
    id: number;
    image: string;
    description: string;
    title: string;
    subtitle?: string;
    platforms?: string[];
    critics: number;
    appearances?: string;
    isFirstElement: boolean;
}

const SummaryCard: React.FC<MyComponentProps> = ({ id, image, description, title, subtitle, platforms, critics, appearances, isFirstElement }) => {
    const [showDetail, setShowDetail] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleDetailClick = () => {
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
    };

    return (
        <div ref={cardRef} className={styles.summary}>
            <img className={styles.image_card} src={image} alt="Some Hero image" />
            <div className={styles.description_card}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <a className={styles.link} onClick={handleDetailClick}>Ver detalhe</a>
            </div>
            {showDetail && (
                <DetailCard
                    id={id}
                    image={image}
                    description={description}
                    title={title}
                    subtitle={subtitle}
                    platforms={platforms}
                    critics={critics}
                    appearances={appearances}
                    onClose={handleCloseDetail}
                    cardRef={cardRef}
                    isFirstElement={isFirstElement}
                    open={showDetail}
                    setOpen={setShowDetail}
                />
            )}
        </div>
    );
};

export default SummaryCard;
