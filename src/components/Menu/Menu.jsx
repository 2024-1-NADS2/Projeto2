import React from "react";
import styles from "./style.css"
import { BsList, BsHouse, BsBook, BsPeople, BsTelephone } from "react-icons/bs";

export default function Menu() {
    return (
        <nav className="menu-lateral">

            <div className="btn-expandir">
                <BsList></BsList>
            </div>

            <ul>
                <li className="item-menu">
                    <a href="#">
                        <span className="icon"><BsHouse/></span>
                        <span className="txt-link">Home</span>
                    </a>
                </li>
                <li className="item-menu">
                    <a href="#">
                        <span className="icon"><BsBook /></span>
                        <span className="txt-link">Cursos</span>
                    </a>
                </li>
                <li className="item-menu">
                    <a href="#">
                        <span className="icon"><BsPeople /></span>
                        <span className="txt-link">Sobre Nós</span>
                    </a>
                </li>
                <li className="item-menu">
                    <a href="#">
                        <span className="icon"><BsTelephone/></span>
                        <span className="txt-link">Contato</span>
                    </a>
                </li>
            </ul>

        </nav>
    )
}