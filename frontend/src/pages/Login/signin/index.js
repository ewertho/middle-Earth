import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../../services/api";
import { login } from "../../../services/auth"

import { Form, Container } from "./style";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const {email, password} = this.state
    
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      
    } else {
      try {
        const response = await api.post("/login/signin", { email, password });
        login(response.data.token)
        console.log(response.data.token)
        this.props.history.push("/access/profile-page")
        
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
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
        <Form onSubmit={this.handleSignIn}>
          
          {this.state.error && <p>{this.state.error}</p>}
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
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/login/signup-page">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);