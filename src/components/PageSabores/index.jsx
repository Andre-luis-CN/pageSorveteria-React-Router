import React from "react";
import CardsSabores from "../CardsSabores";

import './style.css';

import oreo from '../../assets/sabor-oreo.png';
import Pistache from '../../assets/sabor-pistache.png';
import Cookies from '../../assets/sabor-cookies-avela.png';
import Kiwi from '../../assets/sorbet-kiwi.png';
import Morango from '../../assets/sorbet-morango.png';
import Limão from '../../assets/sorbet-limao.png';

const PageSabores = () => (
    <main>
        <section className="sabores-banner">
            <h2 className="sabores-title-banner">NOSSOS SABORES</h2>
        </section>
        <section>
            <h2 className="sabores-title">SABORES DE SORVETE</h2>
            <div className="container-card-sabores limite-tamanho">
                <div className="card-sabores">
                    <img src={oreo} alt="Sorvete de Oreo" />
                    <CardsSabores
                        titulo='Sorvete de Oreo'
                        paragrafo='Delicioso sorvete sabor Oreo. Uma explosão de sabor.'
                    />
                </div>
                <div className="card-sabores">
                    <img src={Pistache} alt="Sorvete Pistache" />
                    <CardsSabores
                        titulo='Sorvete Pistache'
                        paragrafo='Cremoso sorvete sabor pistache com pedacinhos de semente.'
                    />
                </div>
                <div className="card-sabores">
                    <img src={Cookies} alt="Sorvete Cookies & Avelã" />
                    <CardsSabores
                        titulo='Sorvete Cookies & Avelã'
                        paragrafo='O nosso melhor sorvete. Você vai adorar o sabor.'
                    />
                </div>
                <div className="card-sabores">
                    <img src={Kiwi} alt="Sorvete de Kiwi" />
                    <CardsSabores
                        titulo='Sorvete de Kiwi'
                        paragrafo='Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.'
                    />
                </div>
                <div className="card-sabores">
                    <img src={Morango} alt="Sorvete de Morango" />
                    <CardsSabores
                        titulo='Sorvete de Morango'
                        paragrafo='Sorvete de morango gourmet. Tradicional e saboroso.'
                    />
                </div>
                <div className="card-sabores">
                    <img src={Limão} alt="Sorvete de Limão Siciliano" />
                    <CardsSabores
                        titulo='Sorvete de Limão Siciliano'
                        paragrafo='O incrivel sorvete gourmet de limão siciliano vai te encantar.'
                    />
                </div>
            </div>
        </section>

    </main>
)

export default PageSabores;