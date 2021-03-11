import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container, Header } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users/create", { name, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <div>
         <Header>
          <img src="http://matrixcargo.com.br/wp-content/themes/mobi-theme/assets/images/logo-b.png" alt="Matrix Cargo logo" />
        </Header>
      <Container>
        <Form onSubmit={this.handleSignUp}>
        <h3>Crie sua conta no Teste Matrix Cargo</h3>

          
                    {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome"
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
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
      </div>
    );
  }
}

export default withRouter(SignUp);
