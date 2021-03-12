import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { LogoutButtonWithRouter } from "./components/LogoutButton";
import { UsersService } from "../../services/users";
import { Form } from "./styles";
import { withRouter } from "react-router-dom";

const Profile = (props) => {
  //Hooks
  const [user, setUser] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newPassword, changePassword] = useState(undefined);
  const [formData, submitForm] = useState();

  const usersService = new UsersService();

  // Effect to update table
  useEffect(() => {
    setLoading(true);
    usersService.findOne(props.match.params.id)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => setHasError(true));
  }, []);

  // Effect ChangePassword
  useEffect(async () => {
    if (!formData) return;
    usersService.updatePassword(props.match.params.id, newPassword)
      .then((response) => {
        alert('Senha alterada com sucesso.');
        props.history.push("/app");
      })
      .catch(() => setHasError(true));
  }, [formData]);


  return (
    <div>
      <Container>
        <h2>
          Seja bem vindo ao meu Teste Matrix Cargo
      </h2>
        <LogoutButtonWithRouter></LogoutButtonWithRouter>
      </Container>

      <div>
        {
          (!hasError && !loading) && (
            <Content>
              <div>
                <h3>
                  Você está alterando a senha de: {user.name}
                </h3>
                <p>
                  {user.email}
                </p>
                <Form onSubmit={(e) => {
                  e.preventDefault()
                  submitForm(newPassword)
                }}>
                  <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => {
                      console.log(e.target.value)
                      changePassword(e.target.value)
                    }}
                  />
                  <button disabled={newPassword === undefined} type="submit">Alterar Senha</button>
                </Form>
              </div>
            </Content>
          )
        }
        {
          (!hasError && loading) && (<div>Carregando.</div>)
        }
        {
          hasError && (<div>Oops, tivemos um problema.</div>)
        }
      </div>
    </div>
  )
};

export default withRouter(Profile);
