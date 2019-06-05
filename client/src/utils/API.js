import axios from 'axios';

export const createUser = userData => {
  return axios.post('/api/users/register', userData);
};

export const loginUser = userData =>{
  return axios.post("/api/users/login", userData)
}

export const createRegistry = registryData =>{
  return axios.post("/api/registries", registryData)
}

export default {
 createUser,
 loginUser,
 createRegistry
};
