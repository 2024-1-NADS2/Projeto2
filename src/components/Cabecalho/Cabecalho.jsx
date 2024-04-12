import React from 'react';
import styles from './style.css';
import Logo from "../img/logo.png"


export default function Cabecalho() {


    return (
        <header>
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            <p className='texto'>Categorias</p>
            <input type="text" placeholder="Pesquise oque deseje encontrar" />
                <p className="texto">Seja um colaborador</p>
                <div className="botoes-login">
                    <button className="btn">Fazer login</button>
                    <button className="btn">Cadastre-se</button>

            </div>
        </header>
    )
}

