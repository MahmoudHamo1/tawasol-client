import axios from "axios";
import { data } from "react-router-dom";

const serverUrl = "http://localhost:5000";

export const api = axios.create({
  baseURL: `${serverUrl}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export const getProfileImage = (userId) => `${serverUrl}/images/${userId}`;

export const formatData = (data) => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
  }).format(new Date(data));
};
