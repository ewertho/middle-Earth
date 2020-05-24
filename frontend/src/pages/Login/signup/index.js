import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import api from "../../../services/api";

import { Form, Container } from "./styles";

async function handleSignUp (e){
  e.preventdefault()
  const { username, email, password } = this.state
  if (!username || !email || !password) {
    this.setState({ error: "Preencha todos os dados para se cadastrar" });
  } else {
    try {
      await api.post("/login/signup", { username, email, password });
      this.props.history.push("/home");
    } catch (err) {
      console.log(err);
      this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
    }
  }
}

function SignUp() {
  const [username, setUsername]= useState('')
  const [email, setMail]= useState('')
  const [password, setPassword]= useState('')
  const [error, setError]= useState('')





    return (
      <Container>
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/ring.png") + ")"
          }}
        ></div>
        <Form onSubmit={handleSignUp}>

          {setError && <p>{error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => setUsername( e.target.value)}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => setMail(e.target.value )}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword( e.target.value )}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/login/signin-page">Fazer login</Link>
        </Form>
      </Container>
    )

}

export default withRouter(SignUp)
