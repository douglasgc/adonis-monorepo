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

  const [reload, reloadUsers] = useState(true);
  const [idRemoveUser, removeItem] = useState(undefined);

  const usersService = new UsersService();

  // Effect to update table
  useEffect(() => {
    setLoading(true);
    usersService.listAll()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => setHasError(true));
  }, [reload]);

  // Effect to remove item
  useEffect(async () => {
    if (!idRemoveUser) return;
    await usersService.remove(idRemoveUser);
    reloadUsers(idRemoveUser);
  }, [idRemoveUser]);


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
          (!hasError && !loading) && (<TableUsers data={users} removeItem={removeItem}></TableUsers>)
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
