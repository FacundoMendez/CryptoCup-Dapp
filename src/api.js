import axios from 'axios';

export default axios.create({
  /* https://cct-test2.herokuapp.com/api/V1 */ //api pruebas
  /* https://api.cryptocupqatar.io/api/V1 */ //api real
  
  baseURL: `http://localhost:5000/api/V1`,
  withCredentials:true,
});