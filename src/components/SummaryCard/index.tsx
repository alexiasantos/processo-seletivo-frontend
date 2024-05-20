import React from 'react';
import styles from "./index.module.css";

interface MyComponentProps {
    image: string;
    description: string;
    title: string;
}
const SummaryCard: React.FC<MyComponentProps> = ({ image, description, title }) => {
    return (
        <div className={styles.main}>
            <img className={styles.image_card} src={image} alt="Some Hero image" />
            <div className={styles.description_card}>
                <p>{title}</p>
                <textarea name="description">{description}</textarea>
            </div>

        </div>
    );
}

export default SummaryCard;
