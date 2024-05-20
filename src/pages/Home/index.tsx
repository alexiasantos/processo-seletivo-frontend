import React from 'react';
import styles from './index.module.css';
import Header from '../../components/Header/Header';
import SummaryCard from '../../components/SummaryCard';
import spider from '../../assets/img/spider.png';
import Thanos from '../../assets/img/Thanos.png';
import wanda from '../../assets/img/wanda.png';
const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.card_carrosel}>
                    <SummaryCard image={spider} title='Homem-Aranha' description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha." />
                    <SummaryCard image={wanda} title='Wanda Maximoff' description="Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos." />
                    <SummaryCard image={Thanos} title='Thanos' description="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais." />
                </div>
            </main>
        </>
    );
};

export default Home;
