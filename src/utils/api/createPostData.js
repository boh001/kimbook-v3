import axios from "axios";
import {
  BASEURL,
  USERIDCHECK,
  USERSENDEMAIL,
  USERSEARCH,
  USERINFO,
  COMMENTUPLOAD,
  CONTENTLIKE,
} from "./path";

const api = axios.create({
  baseURL: BASEURL,
});
const apiPostData = (path) => (data) => api.post(path, data);

export const apiIdCheck = apiPostData(USERIDCHECK);
export const apiSendEmail = apiPostData(USERSENDEMAIL);
export const apiUserInfo = apiPostData(USERINFO);
export const apiSearch = apiPostData(USERSEARCH);
export const apiComment = apiPostData(COMMENTUPLOAD);
export const apiLike = apiPostData(CONTENTLIKE);
