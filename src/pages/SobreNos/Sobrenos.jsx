import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';
import Card from '../../components/Card/Card.jsx';
import style from './style.css';
import logoGiovanne from '../../components/img/GiovanneBraga-perfil.jpg'
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";


export default function Sobrenos() {
    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className='container-cards-SN'>
                        <Card>
                            <div className="container-dados-SN">

                                <div className='container-dados-info'>
                                    <div className='container-dados-name'>
                                        <img src={logoGiovanne} alt="Giovanne" />
                                        Giovanne Braga
                                    </div>

                                    <div className='container-dados-desc'>
                                        Líder e Desenvolvedor Full-Stack
                                        <div className='container-dados-subdesc'>
                                            19 anos | Analise e desenvolvimento de Sistemas | FECAP
                                        </div>
                                        <div className='container-dados-desc-icons'>
                                            <button> <BsGithub/> </button>
                                            <button> <BsLinkedin/> </button>
                                            <button> <BsEnvelopeFill/> </button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Card>
                        <Card>
                            <div className="container-dados-SN">

                            </div>

                        </Card>
                        <Card>
                            <div className="container-dados-SN">

                            </div>

                        </Card>
                    </section>

                </Conteudo>
            </div>
        </>

    )

}