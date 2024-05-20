import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Menu from '../../components/Menu/Menu';
import Conteudo from '../../components/Conteudo/Conteudo';
import Rodape from '../../components/Rodapé/Rodape';

export default function Organizações() {
    return (
        <>
            <Cabecalho />
            <div className="home content-flex">
            <Menu />
            <Conteudo>
                <h1>Essa pagina tera Organizações</h1>
            </Conteudo>
            <Rodape />
            </div>


        </>

    )
}