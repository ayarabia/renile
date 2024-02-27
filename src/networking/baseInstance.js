import axios  from "axios";
export const instance = axios.create({
    baseURL: "https://nojo.ai/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
  },
});