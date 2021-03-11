import React from "react";
import { Container } from "./styles";
import { TableUsers } from "./components/TableUsers";
import { LogoutButtonWithRouter } from "./components/LogoutButton";

const App = () => (
  <div>
    <Container>
      <h2>
        Seja bem vindo ao meu Teste Matrix Cargo
      </h2>
      <LogoutButtonWithRouter></LogoutButtonWithRouter>
    </Container>
    <Container>
    <h3>
        Lista de usuários:
      </h3>
      <TableUsers></TableUsers>
    </Container>
  </div>
);

export default App;
