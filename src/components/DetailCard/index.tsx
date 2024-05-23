import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface DetailCardProps {
    id: number;
    description: string;
    title: string;
    subtitle?: string;
    platforms?: string[];
    critics: number;
    appearances?: string;
    isFirstElement: boolean;
    open: boolean;
    isLastVisible: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({ description, title, subtitle, platforms, critics, appearances, isFirstElement, open, isLastVisible }) => {
    if (!open) return null;

    return (
        <div className={`${styles.detailCard} ${isFirstElement ? styles.firstElement : ''} ${isLastVisible ? styles.adjustLeft : ''}`}>
            <div className={`${styles.content} ${isLastVisible ? styles.adjust_content : ''}`}>
                <div className={styles.header_title}>
                    <h1 className={styles.title}>{subtitle ? `${title}: ${subtitle}` : title}</h1>
                </div>
                {appearances ? (
                    <p className={styles.appearances}>Aparições: {appearances}</p>
                ) : (
                    <p className={styles.description_card}>{description}</p>
                )}
                {platforms && (
                    <div className={styles.platforms}>
                        <label className={styles.label_streaming}>Disponível em streaming:</label>
                        {platforms.map((platform, index) => (
                            <img key={index} src={platform} alt={`Platform ${index}`} className={styles.platformImage} />
                        ))}
                    </div>
                )}{appearances ? (<label className={styles.critics_label}>Avaliação dos fãs</label>) : (<label className={styles.critics_label}>Crítica</label>)}
                <div className={styles.critics}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={index < critics ? styles.filledStar : styles.emptyStar}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
