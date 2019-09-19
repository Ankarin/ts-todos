import axios from 'axios';

class Call {
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/todos').then(resp => resp.data);
  }
}

export default Call;