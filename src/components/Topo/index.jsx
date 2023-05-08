import React from "react";

import './style.css';

import lostchacos from '../../assets/lostchacos copy.png';
import { Link } from "react-router-dom";

const Topo = () => (
    <header>
        <div className="container-topo limite-tamanho">
            <h1>
                <Link className="link-topo" to="/">
                    <img src={lostchacos} alt="lostchacos" />
                </Link>
            </h1>
            <nav className="container-links">
                <Link className="links-topo" to='/' >Home</Link>
                <Link className="links-topo" to='/Sabores' >Sabores</Link>
                <Link className="links-topo" to='/Sobre' >Sobre</Link>
            </nav>
        </div>
    </header>
)

export default Topo