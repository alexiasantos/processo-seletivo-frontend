import Reactfrom from 'react';
import styles from './index.module.css';
import Header from '../../components/Header/index';
import CharacterSummaryCard from '../../components/CharacterSummaryCard';
import spider from '../../assets/img/spider.png';
import Thanos from '../../assets/img/Thanos.png';
import wanda from '../../assets/img/wanda.png';
import hulk from '../../assets/img/ativo-11.png';
const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.card_carrosel}>
                    <CharacterSummaryCard image={spider} title='Homem-Aranha' description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha." />
                    <CharacterSummaryCard image={wanda} title='Wanda Maximoff' description="Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos." />
                    <CharacterSummaryCard image={Thanos} title='Thanos' description="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais." />
                    <CharacterSummaryCard image={hulk} title='Hulk' description="Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar." />
                </div>
            </main>
        </>
    );
};

export default Home;
