import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-db76d.firebaseio.com/'
});

export default instance;
