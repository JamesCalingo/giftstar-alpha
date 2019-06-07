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

export const getMyData = userData =>{
  return axios.get("/api/users", userData)
}

export const showMyRegistries = registryData =>{
  return axios.get("/api/registries", registryData)
}

export const addItem = productData =>{
return axios.post("/api/products", productData)
}

export const getMyRegistry = productData =>{
  return axios.get("/api/products", productData)
}

export default {
 createUser,
 loginUser,
 createRegistry,
 getMyData,
 addItem
};