import Header from '../../components/Header/index';
import hq1 from '../../assets/img/hq1.png';
import hq2 from '../../assets/img/hq2.png';
import hq3 from '../../assets/img/hq3.png';
import amazon from '../../assets/img/amazon.png';
import americanas from '../../assets/img/americanas.png';
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

const Hqs: React.FC = () => {
    const cards: Card[] = [
        { id: 0, image: hq1, title: 'Thor: Vikings', description: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.", platforms: [amazon, americanas], critics: 5 },
        { id: 1, image: hq2, title: 'Surfista Prateado:Parábola', description: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?", platforms: [amazon, americanas], critics: 5 },
        { id: 2, image: hq3, title: 'Wolverine: Origens', description: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ", platforms: [amazon, americanas], critics: 5 }
    ];

    return (
        <>
            <Header />
            <Carousel cards={cards} />
        </>
    );
};

export default Hqs;
