import React from "react";

import './style.css';

import sobre from '../../assets/sobre-image.jpg';
import geraderia from '../../assets/sorveteria.jpg'
;
const PageSobre = () => (
    <main>
        <section className="sobre-banner">
            <h2 className="sobre-title-banner">A GELATERIA</h2>
        </section>
        <section>
            <div className="container-sobre-text limite-tamanho">
                <h2 className="sobre-title">Sobre Nós</h2>
                <span className="span-title">Nós simplesmente amamos sorvete!</span>
                <p className="sobre-text">Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p className="sobre-text">Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </div>
            <div className="container-sobre-img">
                <img src={sobre} alt="imagem Sobre" />
                <img src={geraderia} alt="imagem Geraderia" />
            </div>
        </section>
    </main>
)

export default PageSobre;