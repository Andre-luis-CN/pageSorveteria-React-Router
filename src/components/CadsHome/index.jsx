import React from "react";
import './style.css';

const CardsHome = (props) => (
    <article className="cards" >
        <h3 className="title-card">{props.titulo}</h3>
        <span className="description-card">{props.descricao}</span>
        <p className="text-card">{props.paragrafo}</p>
    </article>
)

export default CardsHome;