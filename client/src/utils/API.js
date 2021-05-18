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

export const getSpecificList = (listData) => {
  return axios.get("/lists", listData);
};

export const getProducts = (productData) => {
  return axios.get("/products/:id", productData)
}

export const addItem = (productData) => {
  return axios.post("/products", productData);
};

export const deleteItem = (productData) => {
  return axios.delete("/products", productData)
}

export const claimProduct = (productData) => {
  return axios.put("/products", productData);
};

export const findLists = (listData) => {
  return axios.get("public/lists", listData);
};
