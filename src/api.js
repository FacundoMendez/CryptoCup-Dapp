import axios from 'axios';

export default axios.create({
  /* https://cct-api-test.herokuapp.com/api/V1 */ //api pruebas
  baseURL: `https://api.cryptocupqatar.io/api/V1`, 
  withCredentials:true,
});