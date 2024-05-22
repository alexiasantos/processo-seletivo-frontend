import Header from '../../components/Header/index';
import spider from '../../assets/img/spider.png';
import thanos from '../../assets/img/Thanos.png';
import wanda from '../../assets/img/wanda.png';
import hulk from '../../assets/img/ativo-11.png';
import Carousel from '../../components/Carousel';

interface Card {
    id: number;
    image: string;
    description: string;
    title: string;
    subtitle?: string;
    critics: number;
    appearances?: string;
    platforms?: string[];
}

const Home: React.FC = () => {
    const cards: Card[] = [
        {
            id: 0,
            image: spider,
            title: 'Homem-Aranha',
            description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
            appearances: "Vingadores, Guardiões da Galáxia - vol. I, Vingadores - Guerra Infinita, Vingadores - Ultimato",
            critics: 2
        },
        {
            id: 1,
            image: wanda,
            title: 'Wanda Maximoff',
            description: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
            appearances: "Vingadores - Era de Ultron, Capitão América - Guerra Civil, Vingadores - Guerra Infinita, Vingadores - Ultimato, WandaVision",
            critics: 4
        },
        {
            id: 2,
            image: thanos,
            title: 'Thanos',
            description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
            appearances: "Vingadores, Guardiões da Galáxia - vol. I, Vingadores - Guerra Infinita, Vingadores - Ultimato",
            critics: 5
        },
        {
            id: 3,
            image: hulk,
            title: 'Hulk',
            description: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
            appearances: "Vingadores, Vingadores - Era de Ultron, Thor - Ragnarok, Vingadores - Guerra Infinita, Vingadores - Ultimato",
            critics: 4
        }
    ];

    return (
        <>
            <Header />
            <Carousel cards={cards} />
        </>
    );
};

export default Home;
