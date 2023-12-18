import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://page-login.onrender.com//api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getStudent() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getParent() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdmin() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}


export default new UserService();