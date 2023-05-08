import React from "react";
import './style.css';

const CardsSabores = (props) => (
    <article className="sabores-cards" >
        <h3 className="sabores-title-card">{props.titulo}</h3>
        <p className="sabores-text-card">{props.paragrafo}</p>
    </article>
)

export default CardsSabores;