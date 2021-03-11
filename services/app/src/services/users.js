import api from "./api";

export class UsersService {
  listAll() {
    return (
      api.get('/users/')
    );
  }
}