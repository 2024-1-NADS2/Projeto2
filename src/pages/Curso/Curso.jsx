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
            <div className="home content-flex">
                <div className="content-flex">
                    <Menu />
                    <Conteudo>
                        <section className='container-cards-cursos'>
                            <div className="container-field-curso">
                                <div className="container-conteudo-curso">

                                </div>
                            </div>
                            <div className="container-field-curso">
                                <div className="container-conteudo-curso">

                                </div>
                            </div>
                            <div className="container-field-curso">
                                <div className="container-conteudo-curso">

                                </div>
                            </div>
                            <div className="container-field-curso">
                                <div className="container-conteudo-curso">

                                </div>
                            </div>
                        </section>
                    </Conteudo>
                </div>
                <Rodape />
            </div>
        </>
    )
}