import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUp from "./SignUp";
import Header from "./Header";
import Write from "./Write";
import Me from "./Me";
import Content from "./Content";
const rootReducer = combineReducers({
  loading,
  SignUp,
  modal,
  Header,
  Me,
  Write,
  Content,
});

export default rootReducer;
