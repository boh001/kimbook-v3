import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUp from "./SignUp";
const rootReducer = combineReducers({ loading, SignUp, modal });

export default rootReducer;
