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
    onClose: () => void;
    isFirstElement: boolean;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLastVisible: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({ description, title, subtitle, platforms, critics, appearances, onClose, isFirstElement, open, setOpen, isLastVisible }) => {
    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    if (!open) return null;

    return (
        <div className={`${styles.detailCard} ${isFirstElement ? styles.firstElement : ''} ${isLastVisible ? styles.adjustLeft : ''}`}>
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
                <button className={styles.closeButton} onClick={handleClose}></button>
            </div>
        </div>
    );
};

export default DetailCard;
