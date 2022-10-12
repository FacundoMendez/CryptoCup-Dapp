import axios from 'axios';

export default axios.create({
  baseURL: `https:/api.cryptocupqatar.io/api/V1`, 
  withCredentials:true,
});