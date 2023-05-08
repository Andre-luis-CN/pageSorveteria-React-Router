import React from "react";

import './style.css';

import imgSobre from '../../assets/sobre-image.jpg';
import imgSabores from '../../assets/banner-sabores.jpg';
import imgEventos from '../../assets/eventos-image.jpg';


import CardsHome from "../CadsHome";


const PageHome = () => (
    <main>
        <section className="home-banner">
            <h2 className="home-title-banner"><span>LOS</span> TCHÁCOS</h2>
        </section>
        <section>
            <div className="home-cards">
                <img src={imgSabores} alt="Imagem do Sabores" className="card-img" />
                <CardsHome
                    titulo='Nossos produtos'
                    descricao='Novos e deliciosos!'
                    paragrafo='Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!'
                />
            </div>

            <div id="evento" className="home-cards">
                <CardsHome
                    titulo='SOBRE NÓS'
                    descricao='Alegria em cada casquinha!'
                    paragrafo='Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.'
                />
                <img src={imgEventos} alt="Imagem do evento" className="card-img" />
            </div>

            <div className="home-cards" >
                <img src={imgSobre} alt="Imagem EVENTOS" className="card-img" />
                <CardsHome
                    titulo='NOSSOS EVENTOS'
                    descricao='Delicias com sorvete!'
                    paragrafo='Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.'
                />
            </div>
        </section>
    </main>
)

export default PageHome;