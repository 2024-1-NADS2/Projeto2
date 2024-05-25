import React, { useEffect, useState } from "react";
import style from '../CursoPage/style.css'
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Menu from "../../components/Menu/Menu";
import Conteudo from "../../components/Conteudo/Conteudo";
import { useNavigate, useParams } from "react-router-dom";
import { obterCurso } from "../../services/cursos";
import Modal from "../../components/Modal/Modal";
import { cadastrarVideo } from "../../services/videos";
import { useSessionStorage } from "@uidotdev/usehooks";




export default function CursoPage() {
    const { id } = useParams()
    const [curso, setCurso] = useState()
    const navigate = useNavigate()
    const [token] = useSessionStorage("JwtToken")

    const [openModal, setOpenModal] = useState(false)

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        url: '',
    });

    const handleVideoSubmit = (e) => {
        e.preventDefault()

        cadastrarVideo({ ...formData, cursoId: curso.id }, token).then(success => {
            if (success) {
                navigate(0)
            }
        })
    }

    const handleVideoChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Limpa a mensagem de erro quando o usuário começa a digitar
        // setErrors({ ...errors, [id]: '' });
    };

    useEffect(() => {
        obterCurso(id).then(c => console.log(c) || c).then(setCurso)
    }, [])

    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <div className="add-aula">
                        <button onClick={() => setOpenModal(true)} className="button-add-curso">Adicionar Aula</button>
                    </div>
                    <section className="videos">
                        {curso?.videos.map((video) => {

                            return (

                                <div className="card-aula">
                                    <div className="video-aula">
                                        <iframe width="300" height="175" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <div className="info-aula">
                                        <div className="titulo-aula">
                                            <h2>{video.titulo}</h2>
                                        </div>
                                        <div>
                                            {video.descricao}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                        <form onSubmit={handleVideoSubmit}>
                            <div className="inputs-postar-curso">
                                <div className="inputs-info">
                                    <label htmlFor="Título">Titulo:</label>
                                    <input type="text" placeholder="Digite aqui o titulo do vídeo" id="titulo" value={formData.titulo} onChange={handleVideoChange} />
                                </div>
                                <div className="inputs-info">
                                    <label htmlFor="Descrição">Descrição:</label>
                                    <input type="text" placeholder="Digite aqui a Descrição do vídeo" id="descricao" value={formData.descricao} onChange={handleVideoChange} />
                                </div>
                                <div className="inputs-info">
                                    <label htmlFor="url">Url:</label>
                                    <input type="text" placeholder="Digite aqui a Url (Embeded) do vídeo" id="url" value={formData.url} onChange={handleVideoChange} />
                                </div>
                                <div className="salvar-curso">
                                    <button type="submit">Salvar</button>
                                </div>
                            </div>
                        </form>
                    </Modal>
                </Conteudo>
            </div>

        </>
    )
}