import React from 'react';
import styles from './index.module.css';
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
                </div>
            </main>
        </>
    );
};

export default Login;
