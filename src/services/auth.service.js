import axios from "axios";

const API_URL = "https://page-login.onrender.com/api/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(API_URL + "signin", {
        username,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  async register(firstname, secondname, username, email, password, role) {
    return await axios.post(API_URL + "signup", {
      firstname,
      secondname,
      username,
      email,
      password,
      role
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}


export default new AuthService();