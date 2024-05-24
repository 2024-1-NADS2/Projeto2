import React from "react";
import { useState } from "react";
import style from './style.css';
import { Link } from 'react-router-dom';





export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="content-cadastro">
            <div className="container-login">
                <section className="header-login">
                    <h2>Login</h2>
                </section>
                <form id="form" className="form-login">

                    <div className="input-email-login">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Digite o Email da Organização"

                        />
                    </div>

                    <div className="input-senha-login">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="text"
                            id="senha"
                            placeholder="Digite a sua senha"

                        />

                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
    )
}