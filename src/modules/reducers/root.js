import { combineReducers } from "redux";
import loading from "./loading";
import SignUp from "./SignUp";
const rootReducer = combineReducers({ loading, SignUp });

export default rootReducer;
