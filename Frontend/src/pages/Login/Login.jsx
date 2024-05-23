import React from "react";
import { useState } from "react";
import style from './style.css';
import { Link } from 'react-router-dom';





export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <body>
            <div className="container-login">
                <form className="container-login-form">
                    <div className="container-campo-form">
                        <div className="container-title-form">
                            <h1>Login</h1>
                        </div>
                        <div className="container-inputs-form">
                            <label >Email: </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="container-inputs-form">
                            <label >Senha: </label>
                            <input
                                type="Password"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </div>
                        <Link to="/recuperarsenha">
                            <div className="container-alt-form">
                                <a >Esqueci minha senha</a>
                            </div>
                        </Link>
                        <Link to="/cadastro">
                            <div className="container-criar-form">
                                <a >Criar Conta</a>
                            </div>
                        </Link>

                        <div className="container-login-teste">
                            <Link to="/">
                                <button type="submit" className="container-button-form" >Login</button>
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
            <script src="script.jsx"></script>

        </body>
    )
}