import React from "react";
import style from './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("usuario");
  const [cnpj, setCnpj] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <body>
      <div className="container-register">
        <form className="container-register-form" onSubmit={handleSubmit}>
          <div className="container-field-form">
            <div className="container-title-form-register">
              <h1>Cadastrar</h1>
            </div>

            {step === 1 && (
              <>
                <div className="container-select-register">
                  <label>Tipo de Usuário</label>
                  <select className="tipo-usuario" value={tipoUsuario} onChange={e => setTipoUsuario(e.target.value)}>
                    <option value="usuario">Usuário</option>
                    <option value="ong">ONG</option>
                  </select>
                </div>

                <div className="container-inputs-form-register">
                  <label>Nome:</label>
                  <input
                    type="text"
                    placeholder="Sergio"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="container-inputs-form-register">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="kkkkk@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="container-inputs-form-register">
                  <label>Senha:</label>
                  <input
                    type="Password"
                    placeholder="12345"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>

                {tipoUsuario === 'ong' && (
                  <div className="container-inputs-form-register">
                    <label>CNPJ:</label>
                    <input
                      type="text"
                      placeholder="00.000.000/0000-00"
                      value={cnpj}
                      onChange={e => setCnpj(e.target.value)}
                      required
                    />
                  </div>
                )}

                {tipoUsuario === 'ong' && (
                  <button type="submit" className="container-handleNext-register" onClick={handleNext}>Próxima Etapa</button>
                )}

                {tipoUsuario !== 'ong' && (
                  <button type="submit" className="container-button-form-register">Cadastrar</button>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <div className="container-inputs-form-register">
                  <label>Cidade:</label>
                  <input
                    type="text"
                    placeholder="São Paulo"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    required
                  />
                </div>
                <div className="container-inputs-form-register">
                  <label>Rua:</label>
                  <input
                    type="text"
                    placeholder="Rua das Canoas"
                    value={rua}
                    onChange={e => setRua(e.target.value)}
                    required
                  />
                </div>
                <div className="container-inputs-form-register">
                  <label>Número:</label>
                  <input
                    type="text"
                    placeholder="802"
                    value={numeroEndereco}
                    onChange={e => setNumeroEndereco(e.target.value)}
                    required
                  />
                </div>
                <div className="container-inputs-form-register">
                  <label>Telefone:</label>
                  <input
                    type="text"
                    placeholder="11 98787-5862"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    required
                  />
                </div>

                <button type="button" className="container-handleBack-register" onClick={handleBack}>Voltar</button>
                <button type="submit" className="container-button-form-register">Cadastrar</button>
              </>
            )}

            {step === 1 && (
              <Link to="/login">
                <div className="container-Ihaveanaccount-form">
                  <a>Já possui conta?</a>
                </div>
              </Link>
            )}
          </div>
        </form>
      </div>
      

    </body>
  )
}