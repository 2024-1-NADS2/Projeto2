import React from 'react';
import style from './style.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx'
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';


export default function Home() {

    return (
        <>
            <Cabecalho />
            <Menu />
            <Conteudo>
                <h1>Essa pagina sera a Home</h1>
            </Conteudo>
        </>

    )

}