import React from 'react';
import styles from './style.css';
import Logo from "../img/logo.png"
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Cabecalho() {


    return (
        <header>
            <figure>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
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
            <div className="botoes-login">
                <Link to="/login" className='linksemsublinhado'>
                    <button className="btn">Fazer login</button>
                </Link>
                <Link to="/cadastro" className='linksemsublinhado'>
                    <button className="btn">Cadastre-se</button>
                </Link>

            </div>
        </header>
    )
}

