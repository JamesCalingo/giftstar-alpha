import axios from "axios";

export const createUser = (userData) => {
  return axios.post("/users/register", userData);
};

export const loginUser = (userData) => {
  return axios.post("/users/login", userData);
};

export const getMyData = (userData) => {
  return axios.get("/users", userData);
};

export const createNewList = (listData) => {
  return axios.post("/lists", listData);
};

export const showMyLists = (listData) => {
  return axios.get("/lists", listData);
};

export const getSpecificList = (productData) => {
  return axios.get("/products", productData);
};

export const addItem = (productData) => {
  return axios.post("/products", productData);
};

export const deleteItem = (productData) => {
  return axios.delete("/products", productData)
}

export const claimProduct = (productData) => {
  return axios.put("/products", productData);
};

export const findUsers = (userData) => {
  return axios.get("public/users", userData);
};
