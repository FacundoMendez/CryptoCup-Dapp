import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:5000/api/V1`, 
 /*  baseURL: `https://api.cryptocupqatar.io/api/V1`,  */
  withCredentials:true,
});