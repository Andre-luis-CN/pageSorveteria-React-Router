import React from "react";

import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Sabores from "../../pages/Sabores";
import Sobre from "../../pages/Sobre";


const Rotas = () => ( 
    <HashRouter>
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/Sabores" element={ <Sabores/> }/>
            <Route path="/Sobre" element={ <Sobre/> } />
        </Routes>
    </HashRouter>
)

export default Rotas