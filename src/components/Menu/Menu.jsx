import React from "react";
import styles from "./style.css"


export default function Menu() {
    return (
        <div className="barralateral">
            <button className="botaonav">
                <div className='botao-hamburguer'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </button>
            <nav>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Cursos">Cursos</a></li>
                    <li><a href="QuemSomos">Quem Somos</a></li>
                    <li><a href="Contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}