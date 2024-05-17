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
                <main>
                    <section className='home-content'>
                        <div className='home-content-welcome'>
                            <div className='home-content-welcome-small'>
                                <div className='home-content-welcome-small-show'>
                                    <div className='home-content-welcome-small-show-msg'>
                                        <p>Olá seja Bem-Vindo a EducaFacil!
                                            <br />
                                            Confira algumas de nossas tecnologias...
                                        </p>
                                    </div>
                                    <div className='home-content-welcome-small-show-schools'>
                                    <button type="button" className="front-end">Front-end</button>
                                    <button type="button" className="front-end">Back-end</button>
                                    <button type="button" className="front-end">Banco de Dados</button>
                                    <button type="button" className="front-end">Programação Orientada a Objeto</button>
                                    <button type="button" className="front-end">HTML</button>
                                    <button type="button" className="front-end">C#</button>
                                    <button type="button" className="front-end">Figma</button>
                                    <button type="button" className="front-end">React</button>
                                    <button type="button" className="front-end">Css</button>
                                    <button type="button" className="front-end">JavaScript</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='home-content-welcome2'>
                            <h1>Em qual tecnologia você deseja mergulhar ?</h1>
                            <div className='home-content-welcome2-text'>
                                Explore e encontre a organização perfeita para o seu aprendizado!
                            </div>
                        </div>
                    </section>
                </main>
            </Conteudo>
        </>

    )

}