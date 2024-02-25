import axios  from "axios";
export const instance = axios.create({
    baseURL: "http://159.65.161.165:80/",
    headers: {
      "Content-Type": "application/json",
      
  },
});