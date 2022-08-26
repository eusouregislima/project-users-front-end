import axios from "axios";
const baseURL = "https://test-crudnew.herokuapp.com";

export const api = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
