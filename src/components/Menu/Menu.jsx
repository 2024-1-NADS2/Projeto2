import React from "react";
import styles from "./style.css"
import { BsList, BsHouse, BsBook, BsPeople, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu-lateral">

          

            <ul>
                <li className="item-menu">
                    <Link to="/">
                        <span className="icon"><BsHouse/></span>
                        <span className="txt-link">Home</span>
                    </Link>
                </li>
                <li className="item-menu">
                    <Link to="/cursos">
                        <span className="icon"><BsBook /></span>
                        <span className="txt-link">Cursos</span>
                    </Link>
                </li>
                <li className="item-menu">
                    <Link to="/sobrenos">
                        <span className="icon"><BsPeople /></span>
                        <span className="txt-link">Sobre Nós</span>
                    </Link>
                </li>
                <li className="item-menu">
                    <Link to="/contato">
                        <span className="icon"><BsTelephone/></span>
                        <span className="txt-link">Contato</span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}