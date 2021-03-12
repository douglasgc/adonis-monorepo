import api from "./api";

export class UsersService {
  listAll() {
    return api.get('/users/');
  }
  findOne(id) {
    return api.get('/users/' + id);
  }
  updatePassword(id, password) {
    return api.put('/users/' + id + '/changePassword', { password });
  }
  remove(id) {
    return api.delete('/users/' + id);
  }
}