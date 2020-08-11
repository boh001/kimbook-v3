import axios from "axios";
import {
  BASEURL,
  USERIDCHECK,
  USERSENDEMAIL,
  USERSEARCH,
  USERINFO,
  USERSIGNUP,
  USERPROFILE,
  COMMENTUPLOAD,
  CONTENTLIKE,
  CONTENTMARK,
  CONTENTDETAIL,
  USERSUPPORT,
} from "./path";

const api = axios.create({
  baseURL: BASEURL,
});
const apiPostData = (path) => (data) => api.post(path, data);

export const apiIdCheck = apiPostData(USERIDCHECK);
export const apiSendEmail = apiPostData(USERSENDEMAIL);
export const apiSignUp = apiPostData(USERSIGNUP);
export const apiUserInfo = apiPostData(USERINFO);
export const apiUserProfile = apiPostData(USERPROFILE);
export const apiUserSearch = apiPostData(USERSEARCH);
export const apiUserSupport = apiPostData(USERSUPPORT);
export const apiComment = apiPostData(COMMENTUPLOAD);
export const apiLike = apiPostData(CONTENTLIKE);
export const apiMark = apiPostData(CONTENTMARK);
export const apiDetail = apiPostData(CONTENTDETAIL);
