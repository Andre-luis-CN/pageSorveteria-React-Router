import React from "react";
import Topo from "../Topo";
import Rodape from "../Rodape";

const EstruturaPage = (pros) => (
    <section>
        <Topo/>

            {pros.children}
        
        <Rodape/>
    </section>
)

export default EstruturaPage;