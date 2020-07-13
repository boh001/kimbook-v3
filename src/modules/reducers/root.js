import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUp from "./SignUp";
import Header from "./Header";
const rootReducer = combineReducers({ loading, SignUp, modal, Header });

export default rootReducer;
