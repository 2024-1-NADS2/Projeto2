import React from 'react';
import styles from './style.css';
import Logo from "../img/logo.png"
import { AiFillCaretDown} from "react-icons/ai";


export default function Cabecalho() {


    return (
        <header>
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            <nav className='drop-hover'> 
            <div className='categorias'> <a className='texto'>Categorias <AiFillCaretDown /></a> </div>
                <div className='drop'>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JAVASCRIPT</a>
                    <a href="#">C#</a>
                    <a href="#">ORIENTAÇÂO A OBJETO</a>
                </div>
            </nav>
            <input type="text" placeholder="Pesquise oque deseja encontrar" />
            <a className="texto">Seja um colaborador</a>
            <div className="botoes-login">
                <button className="btn">Fazer login</button>
                <button className="btn">Cadastre-se</button>

            </div>
        </header>
    )
}

