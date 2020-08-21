import axios from "axios";
import {
  BASEURL,
  USERIDCHECK,
  USERSENDEMAIL,
  USERSEARCH,
  USERINFO,
  USERSIGNUP,
  USERLOGOUT,
  USERPROFILE,
  COMMENTUPLOAD,
  CONTENTLIKE,
  CONTENTMARK,
  CONTENTDETAIL,
  USERSUPPORT,
  CONTENTDELETE,
  USERCHANGEPWD,
  USERCHANGEPROFILE,
} from "./path";

const api = axios.create({
  baseURL: BASEURL,
});
const apiPostData = (path) => (data) => api.post(path, data);
const apiGetData = (path) => (data) => api.get(path, data);

export const apiIdCheck = apiPostData(USERIDCHECK);
export const apiSendEmail = apiPostData(USERSENDEMAIL);
export const apiSignUp = apiPostData(USERSIGNUP);
export const apiUserInfo = apiPostData(USERINFO);
export const apiUserLogout = apiGetData(USERLOGOUT);
export const apiUserProfile = apiPostData(USERPROFILE);
export const apiUserSearch = apiPostData(USERSEARCH);
export const apiUserSupport = apiPostData(USERSUPPORT);
export const apiUserChangePwd = apiPostData(USERCHANGEPWD);
export const apiUserChangeProfile = apiPostData(USERCHANGEPROFILE);
export const apiComment = apiPostData(COMMENTUPLOAD);
export const apiLike = apiPostData(CONTENTLIKE);
export const apiMark = apiPostData(CONTENTMARK);
export const apiDetail = apiPostData(CONTENTDETAIL);
export const apiContentDelete = apiPostData(CONTENTDELETE);
