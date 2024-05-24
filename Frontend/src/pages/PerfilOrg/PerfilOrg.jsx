import React from "react";
import { useState } from "react";
import style from '../PerfilOrg/style.css';
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Menu from "../../components/Menu/Menu";
import Conteudo from "../../components/Conteudo/Conteudo";
import Rodape from "../../components/Rodapé/Rodape";
import { MdOutlineModeEdit } from "react-icons/md";
import Modal from "../../components/Modal/Modal";



export default function PerfilOrg() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <Cabecalho />
            <div className='home.content-flex'>
                <div className='content-flex'>
                    <Menu />
                    <Conteudo>
                        <div className="all-page-perfil">
                            <section className="perfil-organizacoes">
                                <div className="button-edit">
                                    <button className="pencil-edit">Editar<MdOutlineModeEdit /></button>
                                </div>
                                <div className="perfil-head">
                                    <div className="logo-perfil-org">
                                        <img src="https://storage.googleapis.com/atados-v3/user-uploaded/images/6992f0b3-fd06-490c-b332-37951e36ab54.png" alt="logo Ebenezer" />
                                    </div>
                                    <div className="info-perfil-org">
                                        <div className="perfil-dados">
                                            <div>
                                                Instituto Ebenezer
                                            </div>
                                            <div className="descricao-perfil-org">
                                                O Instituto Ebenézer é uma organização da sociedade civil, constituída em 2018, com o objetivo de promover a inclusão social e a defesa de direitos sociais de pessoas em situação de risco e vulnerabilidade social.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="perfil-separador">
                                </div>
                                <div className="add-curso">
                                    <button onClick={() => setOpenModal(true)} className="button-add-curso">Adicionar Curso</button>
                                </div>
                                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                                    <div className="inputs-postar-curso">
                                        <div className="inputs-info">
                                            <label htmlFor="Título">Titulo:</label>
                                            <input type="text" placeholder="Digite aqui o titulo do curso" />
                                        </div>
                                        <div className="inputs-info">
                                            <label htmlFor="Descrição">Descrição:</label>
                                            <input type="text" placeholder="Digite aqui a Descrição do Curso" />
                                        </div>
                                        <div className="inputs-info">
                                            <label htmlFor="Professor">Professor:</label>
                                            <input type="text" placeholder="Digite aqui o o nome do Professor" />
                                        </div>
                                        <div className="inputs-info">
                                            <label htmlFor="Carga-Horaria">Carga Horaria:</label>
                                            <input type="text" placeholder="Digite aqui o tempo do curso" />
                                        </div>
                                        <div className="inputs-info">
                                            <label htmlFor="Tag">Tag:</label>
                                            <input type="text" placeholder="Digite aqui as tags do curso" />
                                        </div>
                                        <div className="salvar-curso">
                                            <button>Salvar</button>
                                        </div>
                                    </div>
                                </Modal>
                                <div className="perfil-content">
                                    <div className="curso-pub">
                                        <div>
                                            ThumbNeil
                                        </div>
                                        <div className="Info-curso">
                                            Fazendo uma aplicação do zero com React
                                        </div>
                                    </div>
                                    <div className="curso-pub">
                                        <div>
                                            ThumbNeil
                                        </div>
                                        <div className="Info-curso">
                                            Fazendo uma aplicação do zero com React
                                        </div>
                                    </div>
                                    <div className="curso-pub">
                                        <div>
                                            ThumbNeil
                                        </div>
                                        <div className="Info-curso">
                                            Fazendo uma aplicação do zero com React
                                        </div>
                                    </div>
                                    <div className="curso-pub">
                                        <div>
                                            ThumbNeil
                                        </div>
                                        <div className="Info-curso">
                                            Fazendo uma aplicação do zero com React
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Conteudo>
                </div>

                <Rodape />
            </div >
        </>
    )
}

