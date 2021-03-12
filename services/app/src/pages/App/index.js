import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { TableUsers } from "./components/TableUsers";
import { LogoutButtonWithRouter } from "./components/LogoutButton";
import { UsersService } from "../../services/users";

const App = () => {
  //Hooks
  const [users, setUsers] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const usersService = new UsersService();

  useEffect(() => {
    setUsers([]);
    usersService.listAll()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => setHasError(true));
  }, []);
  return (
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
      </Container>
      <Container>
        {
          (!hasError && !loading) && (<TableUsers data={users}></TableUsers>)
        }
        {
          (!hasError && loading) && (<div>Carregando.</div>)
        }
        {
          hasError && (<div>Oops, tivemos um problema.</div>)
        }
      </Container>
    </div>
  )
};

export default App;
