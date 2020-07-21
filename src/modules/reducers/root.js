import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUp from "./SignUp";
import Header from "./Header";
import Write from "./Write";
import Me from "./Me";
const rootReducer = combineReducers({
  loading,
  SignUp,
  modal,
  Header,
  Me,
  Write,
});

export default rootReducer;
