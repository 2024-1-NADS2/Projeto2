import React from "react";
import { useState } from "react";
import style from './style.css';
import { Link } from 'react-router-dom';





export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <body>
        <div className="container-login">
            <div className="container-image-login">
                <h1>VENHA APRENDER</h1>
            </div>
            <form className="container-login-form">
                <div className="container-campo-form">
                <div className="container-title-form">
                    <h1>login</h1>
                </div>
                <div className="container-inputs-form">
                    <input 
                    type="text" 
                    placeholder="Email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required/>
                </div>
                <div className="container-inputs-form">
                    <input 
                    type="Password" 
                    placeholder="senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
                </div>
                <Link to="/recuperarsenha">
                    <div className="container-alt-form">
                    <label htmlFor="altpassword"></label>
                    <a href="#">Alterar senha</a>
                    </div>
                </Link>
                <Link to="/cadastro">
                    <div className="container-criar-form">
                     <label htmlFor="criarcont"></label>
                     <a href="#">Criar Conta</a>   
                    </div>
                </Link>
                
                <Link to="/">
                <button type="submit" className="container-button-form" href='#'>login</button>
                </Link>

                </div>

            </form>
        </div>
        <script src="script.jsx"></script>
    
        </body> 
    )
}