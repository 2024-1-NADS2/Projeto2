import React from "react";
import { useState } from "react";
import style from './style.css';





export default function Login(){

    const [email, setEmail] = useState("");
    const [passaword, setPassaword] = useState("");
    return(
        <body>
        <div class="logincontainer">
            <div class="ladocplogin">
                <img src="logo.png" class="logologin" alt="logo"/>
                <h1>venha aprender</h1>
            </div>
            <form id="login-form">
                <div class="campologin">
                    <h2>LOGIN</h2>
                <div class="inputs">
                    <label for="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onchange={e => setEmail(e.target.value)}
                    required/>
                </div>
                <div class="inputs">
                    <label for="passaword">passaword</label>
                    <input 
                    type="password" 
                    id="passaword" 
                    name="passaword" 
                    value={passaword}
                    onchange={e => setPassaword(e.target.value)}
                    required/>
                </div>
                <div class="criarconta">
                    <label for="criarconta"></label>
                    <a href="#">criar conta</a>
                </div>
                
                <button type="submit" className="botlogin" href="#">LOGIN</button>
                
            </div>
            </form>
        </div>
        <script srg="script.js"></script>
    
    </body> 
    )
}