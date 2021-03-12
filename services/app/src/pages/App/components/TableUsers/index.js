import React from "react";
export const TableUsers = (props) => {
  if (props.data === undefined) {
    return (<div></div>);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((item) => (
            <tr key={item.id.toString()}>
              <th scope="row">
                {item.id.toString()}
              </th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
};