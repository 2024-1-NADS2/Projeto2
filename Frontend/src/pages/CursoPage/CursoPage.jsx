import React, { useEffect, useState } from "react";
import style from '../CursoPage/style.css'
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Menu from "../../components/Menu/Menu";
import Conteudo from "../../components/Conteudo/Conteudo";
import { useParams } from "react-router-dom";
import { obterCurso } from "../../services/cursos";



export default function CursoPage() {
    const { id } = useParams()
    const [curso, setCurso] = useState()

    useEffect(() => {
        obterCurso(id).then(c => console.log(c)||c).then(setCurso)
    }, [])

    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className="videos">
                        { curso?.videos.map((video) => {

                            return(
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
                </Conteudo>
            </div>

        </>
    )
}