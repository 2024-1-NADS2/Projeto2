import React from "react";
import style from './style.css';
import { useState } from 'react';



export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [passaword, setPassaword] = useState("");
    const [nome, setNome] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("usuario"); 
    const [cnpj, setCnpj] = useState("");
    return(
    <body>
    
      <div class="cadastrarcontainer">
            <form id="cadastrar-form">
                <div class="campocadastrar">
                    <h2>CADASTRAR</h2>

                    <div class="inputscad">
                            <label For="tipo-usuario">Tipo de Usuário</label>
                            <select id="tipo-usuario" value={tipoUsuario} onChange={e => setTipoUsuario(e.target.value)}>
                                <option value="usuario">Usuário</option>
                                <option value="ong">ONG</option>
                            </select>
                        </div>

                    <div class="inputscad">
                    <label for="email">username</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="nome"
                    value={nome}
                    onchange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="inputscad">
                    <label for="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onchange={e => setEmail(e.target.value)}
                    required/>
                </div>

                <div class="inputscad">
                    <label for="passaword">passaword</label>
                    <input 
                    type="password" 
                    id="passaword" 
                    name="passaword" 
                    value={passaword}
                    onchange={e => setPassaword(e.target.value)}
                    required/>
                </div>

                {tipoUsuario === 'ong' && (
                            <div class="inputscad">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input
                                    type="text"
                                    id="cnpj"
                                    name="cnpj"
                                    value={cnpj}
                                    onChange={e => setCnpj(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                <div class="jatemlogin">
                    <label for="japossuiconta"></label>
                    <a href="#">ja possui conta</a>
                </div>

                
                <button type="submit" class="botcadastrar">CADASTRAR</button>
                

            </div>
            </form>
        </div>
        <script srg="script.js"></script>
    
    
    </body>
    )
}