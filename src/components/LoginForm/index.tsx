import React from 'react';
import styles from './index.module.css';
import Button from '../Button';

const LoginForm: React.FC = () => {
    return (
        <>
            <form className={styles.form} action="">
                <p>Bem vindo(a) de volta!</p>
                <label htmlFor="inputs" className={styles.label_input}>Acesse sua conta:</label>
                <input type="email" placeholder='Email:' id="email" name="email" />
                <input type="password" placeholder='Senha;' id="senha" name="senha" />
                <div>
                    <Button type="submit">Enviar</Button>
                </div>

            </form>
        </>
    );
};

export default LoginForm;
