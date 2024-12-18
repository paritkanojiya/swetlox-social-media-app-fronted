import axios from "axios";

export const publicApi = axios.create({
  baseURL: "http://localhost:9000/swetlox/v1",
});
export const privateApi = axios.create({
  baseURL: "http://localhost:9000/swetlox/v1/api",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("auth"),
  },
});
