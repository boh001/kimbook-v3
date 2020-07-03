import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});
export const apiIdCheck = (id) => {
  const data = {
    id,
  };
  return api.post("user/idCheck", data);
};
export const apiEmail = (email, name) => {
  const data = {
    email,
    name,
  };
  return api.post("/user/sendEmail", data);
};
