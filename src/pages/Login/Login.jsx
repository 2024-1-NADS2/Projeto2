import React from "react";
import style from './style.css';





export default function Login(){
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
                    <label for="username">username</label>
                    <input type="text" id="username" name="username"
                        required/>
                </div>
                <div class="inputs">
                    <label for="passaword">passaword</label>
                    <input type="password" id="passaword" name="passaword" required/>
                </div>
                <div class="esqueceupassword">
                    <label for="esqueceupassaword"></label>
                    <a href="#">lembre me</a>
                </div>
                <button type="submit">LOGIN</button>
            </div>
            </form>
        </div>
        <script srg="script.js"></script>
    
    </body> 
    )
}