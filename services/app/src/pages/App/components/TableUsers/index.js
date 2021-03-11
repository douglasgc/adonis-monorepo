import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import { StreamBuilder, ConnectionState } from "react-stream-builder";
import { UsersService } from "../../../../services/users";


class TableUsersState extends Component {
  usersService = new UsersService();
  handleLogout = e => {
    this.props.history.push('/');
  };
  render () {
    [data, setData] = useState({ hits: [] });

    useEffect(async () => {
      const result = await this.usersService.listAll();
      setData(result.data);
    });
    return (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            );
  };
}
export const TableUsers = withRouter(TableUsersState);
