import api from "./api";

export class UsersService {
  listAll() {
    return api.get('/users/');
  }
  remove(id) {
    return api.delete('/users/' + id);
  }
}