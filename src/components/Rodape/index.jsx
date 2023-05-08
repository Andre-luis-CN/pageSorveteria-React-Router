import React from 'react';

import './style.css';

import lostchacos from '../../assets/lostchacos copy.png';


const Rodape = () => (
    <footer>
        <div className=' container-footer limite-tamanho'>
            <img src={lostchacos} alt='imagem rodapé' className='rodape-img' />
            <div className='cards-footer'>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className='cards-footer'>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>
            <div className='cards-footer'>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <p className='text-name'>Los tchácos. Orgulhosamente desenvolvido por "André Luis Coelho do Nascimento"</p>
    </footer>
) 

export default Rodape