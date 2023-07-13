import axios from 'axios';
import { useNavigate } from 'react-router';

const instance = axios.create({
  baseURL: process.env.REACT_APP_MOCK_SERVER_URL
})

instance.interceptors.response.use(
  function(res) {
    return res
  },
  function(error) {
    const msg = error.response.data.message;
    return Promise.reject(msg);
  },
)

export default instance;