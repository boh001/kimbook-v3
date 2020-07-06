import axios from "axios";
import { baseURL, idCheckURL, sendEmailURL } from "./path";

const api = axios.create({
  baseURL: baseURL,
});
const apiPostData = (path) => (data) => api.post(path, data);

export const apiIdCheck = apiPostData(idCheckURL);
export const apiSendEmail = apiPostData(sendEmailURL);
