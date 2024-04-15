import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';


export default function Sobrenos() {
    return (
        <>
            <Cabecalho />
            <Menu />
            <Conteudo>
              <h1>Essa pagina tera informações sobre nos</h1>
            </Conteudo>
        </>

    )

}