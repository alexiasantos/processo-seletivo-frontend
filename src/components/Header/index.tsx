import styles from "./index.module.css";
import React, { useState } from 'react';
import usuario from "../../assets/img/profile-picture.png"

interface HeaderProps {
    onItemClick?: (itemId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onItemClick }) => {
    const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);

    const handleItemClick = (itemId: string) => {
        setItemSelecionado(itemId);
        if (onItemClick) {
            onItemClick(itemId);
        }
    };
    return (<header className={styles.header}>
        <p className={styles.logo}>Marvel</p>
        <ul className={styles.navegation}>
            <li onClick={() => handleItemClick('item1')} className={itemSelecionado === 'item1' ? styles.selecionado : ''}>
                Personagens
            </li>
            <li onClick={() => handleItemClick('item2')} className={itemSelecionado === 'item2' ? styles.selecionado : ''}>
                Filmes
            </li>
            <li onClick={() => handleItemClick('item3')} className={itemSelecionado === 'item3' ? styles.selecionado : ''}>
                HQs
            </li>
            <li className={styles.profile}><img src={usuario}></img>
                Sair
            </li>
        </ul>

    </header >);
}

export default Header