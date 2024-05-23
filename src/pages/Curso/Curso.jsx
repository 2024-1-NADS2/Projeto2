import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Menu from '../../components/Menu/Menu';
import Conteudo from '../../components/Conteudo/Conteudo';
import Card from '../../components/Card/Card';
import Rodape from '../../components/Rodapé/Rodape';


export default function Curso() {
    return (
        <>
            <Cabecalho />
            <div className="content-flex">
                <Menu />
                <Conteudo>

                </Conteudo>
            </div>
            <Rodape />
        </>
    )
}