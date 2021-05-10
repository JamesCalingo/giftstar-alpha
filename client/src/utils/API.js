import axios from "axios";

export const createUser = (userData) => {
  return axios.post("/api/users/register", userData);
};

export const loginUser = (userData) => {
  return axios.post("/api/users/login", userData);
};

export const getMyData = (userData) => {
  return axios.get("/api/users", userData);
};

export const createList = (listData) => {
  return axios.post("/api/lists", listData);
};

export const showMyLists = (listData) => {
  return axios.get("/api/lists", listData);
};

export const getSpecificList = (productData) => {
  return axios.get("/api/products", productData);
};

export const addItem = (productData) => {
  return axios.post("/api/products", productData);
};

export const deleteItem = (productData) => {
  return axios.delete("/api/products", productData)
}

export const claimProduct = (productData) => {
  return axios.put("/api/products", productData);
};

export const findUser = (userData) => {
  return axios.get("api/users/public", userData);
};
