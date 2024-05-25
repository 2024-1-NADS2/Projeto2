import React from "react";
import style from "../VideoPage/style.css"
import Menu from "../../components/Menu/Menu";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Conteudo from "../../components/Conteudo/Conteudo";


export default function VideoPage() {
    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className="section-video-content">
                        <section className="section-video-aula">
                            <div className="title-video-aula">
                                Aula 01 - Criando a primeira pagina em HTML
                            </div>
                            <div className="videos-separador"></div>
                            <iframe width="75%" height="75%" src="https://www.youtube.com/embed/8mei6uVttho?si=wTLGceeWek4ixiwl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </section>
                    </section>

                </Conteudo>
            </div>
        </>

    )
}