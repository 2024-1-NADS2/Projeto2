import React from "react";
import style from "../CardOrg/style.css"


export default function CardOrg({org}) {
    return (

        <div className='card-organizacoes'>
            <div className="card-org-info">
                <img className="card-org-logo" src={org.imagem} alt="logo-org" />
                { org.nome }
            </div>
            <div className="card-org-acessar-perfil">
                <button>Acessar Perfil</button>
            </div>
        </div>
    )
}