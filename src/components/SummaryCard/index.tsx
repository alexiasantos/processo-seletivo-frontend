import React, { useState } from 'react';
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
    isLastVisible: boolean;
}

const SummaryCard: React.FC<MyComponentProps> = ({ id, image, description, title, subtitle, platforms, critics, appearances, isFirstElement, isLastVisible }) => {
    const [showDetail, setShowDetail] = useState(false);

    const handleDetailClick = () => {
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
    };

    return (
        <div className={styles.summary}>
            <img
                className={`${styles.image_card} ${showDetail ? styles.detail_active : ''}`}
                src={image}
                alt="Some Hero image"
            />
            {!showDetail && (
                <div className={styles.description_card}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.link} onClick={handleDetailClick}>Ver detalhe</a>
                </div>
            )}
            {showDetail && (
                <>
                    <DetailCard
                        id={id}
                        description={description}
                        title={title}
                        subtitle={subtitle}
                        platforms={platforms}
                        critics={critics}
                        appearances={appearances}
                        isFirstElement={isFirstElement}
                        open={showDetail}
                        isLastVisible={isLastVisible}
                    />
                    <button className={`${styles.closeButton} ${isLastVisible ? styles.modifyButton : ''}`} onClick={handleCloseDetail}></button>
                </>
            )}
        </div>
    );
};

export default SummaryCard;
