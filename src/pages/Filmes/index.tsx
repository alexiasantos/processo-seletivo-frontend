import React from 'react';
import Header from '../../components/Header/index';
import Carousel from '../../components/Carousel';
import homem_de_ferro from '../../assets/img/homem-de-ferro.png';
import Thor from '../../assets/img/Thor_Official_Poster.png';
import homem_de_ferro_2 from '../../assets/img/HOMEM-DE-FERRO-2.png';
import capitao from '../../assets/img/unnamed.png';
import capita_marvel from '../../assets/img/capita-marvel.png';
import plataform_disney from '../../assets/img/logo-grande.png'

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
const Filmes: React.FC = () => {
    const cards: Card[] = [
        { id: 0, image: homem_de_ferro, title: 'Homem de Ferro', description: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.", subtitle: "Playboy Filantropo", critics: 5, platforms: [plataform_disney] },
        { id: 1, image: homem_de_ferro_2, title: 'Homem de Ferro 2', description: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas.", subtitle: "Playboy Filantropo", critics: 5, platforms: [plataform_disney] },
        { id: 2, image: Thor, title: 'Thor', description: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ", subtitle: "O Melhor Vingador", critics: 3 },
        { id: 3, image: capitao, title: 'Capitão América', description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ", subtitle: "Primeiro Vingador", platforms: [plataform_disney], critics: 4 },
        { id: 4, image: capita_marvel, title: 'Capitã Marvel', description: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ", critics: 4, platforms: [plataform_disney] }
    ];

    return (
        <>
            <Header />
            <Carousel cards={cards} />
        </>
    );
};

export default Filmes;
