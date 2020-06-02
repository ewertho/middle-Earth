import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import api from "../../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  }

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/login/signup", { name, email, password });
        this.props.history.push("/acess/profile-page");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta" });
      }
    }
  };

  render() {
    return (
      <Container>
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/ring.png") + ")"
          }}
        ></div>
        <Form onSubmit={this.handleSignUp}>
          
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/login/signin-page">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
