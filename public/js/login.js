import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:4000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data);
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get('http://localhost:4000/api/v1/users/logout');
    showAlert('success', 'Successfully Loggedout');
    console.log(res.data);
    if (res.data.status === 'success') location.assign('/');
  } catch (err) {
    showAlert('error', 'Unable to logout.');
  }
};
