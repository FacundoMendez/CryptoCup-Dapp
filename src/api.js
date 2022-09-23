import axios from 'axios';

export default axios.create({
  baseURL: `https://cryptocup-api.herokuapp.com/api/V1/`, 
  withCredentials:true,
});