import React from 'react';
import styles from "./index.module.css";

import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
    const navigate = useNavigate(); // Use useNavigate em vez de useHistory

    const handleClick = () => {
        if (type === 'submit') {
            navigate('/home'); // Use navigate para navegar para a rota '/home'
        }
    };

    return (
        <button className={styles.botao} type={type} onClick={handleClick}>{children}</button>
    );

}

export default Button