import React from 'react';
import styles from './index.module.css';
import avengersImage from '../../assets/img/ativo-19.png';
import LoginForm from '../../components/LoginForm';
const Login: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.left_container}>
                    <div className={styles.login_form}>
                        <p className={styles.logo_text}>Marvel</p>
                        <LoginForm />
                    </div>
                </div>
                <div className={styles.image_login}>
                    <img className={styles.avengers_image} src={avengersImage} />
                </div>
            </main>
        </>
    );
};

export default Login;
