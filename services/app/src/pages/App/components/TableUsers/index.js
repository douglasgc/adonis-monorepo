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
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((item) => (
            <tr key={item.id.toString()}>
              <td>
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