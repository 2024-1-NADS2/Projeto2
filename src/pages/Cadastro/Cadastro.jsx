import React from "react";
import style from './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("usuario"); 
    const [cnpj, setCnpj] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [numeroEndereco, setNumeroEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    return(
    <body>
     <div className="container-register">
            <form className="container-register-form">
                <div className="container-field-form">
                <div className="container-title-form-register">
                    <h1>cadastrar</h1>
                </div>

                    <div className="container-select-register">
                            <label >Tipo de Usuário</label>
                            <select className="tipo-usuario" value={tipoUsuario} onChange={e => setTipoUsuario(e.target.value)}>
                                <option value="usuario">Usuário</option>
                                <option value="ong">ONG</option>
                            </select>
                    </div>

                
                <div className="container-inputs-form-register">
                  <label ></label>
                    <input 
                    type="text" 
                    placeholder="Nome"
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>
                <div className="container-inputs-form-register">
                    <input 
                    type="text" 
                    placeholder="Email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required/>
                </div>
                <div className="container-inputs-form-register">
                    <input 
                    type="Password" 
                    placeholder="senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
                </div>

                {tipoUsuario === 'ong' && (
            <>
              <div className="container-inputs-form-register">
                <label >Ex:00.000.000/0000-00</label>
                <input
                  type="text"
                  placeholder="CNPJ"
                  value={cnpj}
                  onChange={e => setCnpj(e.target.value)}
                  required
                />
              </div>
              <div className="container-inputs-form-register">
                <label ></label>
                <input
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                  required
                />
              </div>
              <div className="container-inputs-form-register">
                <label ></label>
                <input
                  type="text"
                  placeholder="Rua"
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                  required
                />
              </div>
              <div className="container-inputs-form-register">
                <label ></label>
                <input
                  type="text"
                  placeholder="Numero de Endereço"
                  value={numeroEndereco}
                  onChange={e => setNumeroEndereco(e.target.value)}
                  required
                />
              </div>
              <div className="container-inputs-form-register">
                <label ></label>
                <input
                  type="text"
                  placeholder="telefone"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                  required
                />
              </div>
            </>
          )}

                   <Link to="/login">
                    <div className="container-Ihaveanaccount-form">
                     <label ></label>
                     <a >ja possui conta</a>   
                    </div>
                    </Link>
                
                 <Link to="/login">
                <button type="submit" className="container-button-form-register" >cadastrar</button>
                </Link>

                </div>

            </form>
        </div>
        <script src="script.jsx"></script>
    
      
    </body>
    )
}