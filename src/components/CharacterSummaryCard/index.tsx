import React from 'react';
import styles from "./index.module.css";

interface MyComponentProps {
    image: string;
    description: string;
    title: string;
}
const CharacterSummaryCard: React.FC<MyComponentProps> = ({ image, description, title }) => {
    return (
        <div className={styles.main}>
            <img className={styles.image_card} src={image} alt="Some Hero image" />
            <div className={styles.description_card}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <a href="" className={styles.link}>Ver detalhes</a>
            </div>

        </div>
    );
}

export default CharacterSummaryCard;
