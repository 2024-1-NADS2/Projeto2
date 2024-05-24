import React from "react";
import style from '../CardCurso/style.css'
import { BsTrash } from "react-icons/bs";




export default function CardCurso({curso}) {
    return (
        <div className="curso-pub">
            <div className="curso-content-card">
                <div className="info-curso">
                    <div className="titulo-curso">
                         {curso.titulo}
                    </div>
                    <div>
                        <button className="botao-excluir"><BsTrash /></button>
                    </div>
                </div>
                <div className="sub-info-curso">
                    <div className="descricao-curso">
                        {curso.descricao}

                    </div>
                    <div className="professor-curso">
                        {curso.professor}
                    </div>
                    <div className="carga-curso">
                        {curso.cargahoraria}
                    </div>
                </div>

            </div>
        </div>
    )
}