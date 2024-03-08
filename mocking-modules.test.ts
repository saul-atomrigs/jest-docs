// users.ts
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then((resp) => resp.data);
  }
}

export default Users;

// users.test.ts
// should  test this method without actually hitting the API (
import axios from 'axios';
import Users from './users';

jest.mock('axios'); // axios모듈을 목킹한다

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp); // == 실제 코드에서의 axios.get('/users.json')와 동일

  // 프로미스를 반환하는 경우:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});
