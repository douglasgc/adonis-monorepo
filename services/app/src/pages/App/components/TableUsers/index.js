import React from "react";
import { Table, Button } from "./styles";
import { Link } from "react-router-dom";

export const TableUsers = (props) => {
  if (props.data === undefined) {
    return (<div></div>);
  }
  return (
    <Table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((item) => (
            <tr key={item.id.toString()}>
              <td scope="row">
                {item.id.toString()}
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button onClick={() => props.removeItem(item.id)}>
                  Excluir
                </Button>

                <Link to={"/profile/" + item.id}>
                  <Button>
                    Alterar Senha
                </Button>
                </Link>
              </td>
            </tr>
          ))
        }

      </tbody>
    </Table>
  );
};