import styles from "./index.module.css";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usuario from "../../assets/img/profile-picture.png"

interface HeaderProps {
    onItemClick?: (itemId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onItemClick }) => {
    const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/home') {
            setItemSelecionado('item1');
        } else if (location.pathname === '/filmes') {
            setItemSelecionado('item2');
        } else if (location.pathname === '/hqs') {
            setItemSelecionado('item3')
        }
    }, [location]);
    const handleItemClick = (itemId: string) => {
        setItemSelecionado(itemId);
        if (onItemClick) {
            onItemClick(itemId);
        }
    };
    return (<header className={styles.header}>
        <p className={styles.logo}>Marvel</p>
        <ul className={styles.navegation}>
            <li className={itemSelecionado === 'item1' ? styles.selecionado : ''}>
                <Link to="/home" onClick={() => handleItemClick('item1')}>Personagem</Link>
            </li>
            <li className={itemSelecionado === 'item2' ? styles.selecionado : ''}>
                <Link to="/filmes" onClick={() => handleItemClick('item2')}>Filmes</Link>
            </li>
            <li className={itemSelecionado === 'item3' ? styles.selecionado : ''}>
                <Link to="/hqs" onClick={() => handleItemClick('item3')}>HQs</Link>
            </li>
            <li className={styles.profile}>
                <img src={usuario} alt="Perfil" />
                Sair
            </li>
        </ul>

    </header >);
}

export default Header