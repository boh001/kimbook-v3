import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUpCheck from "./SignUp/SignUpCheck";
const rootReducer = combineReducers({ loading, SignUpCheck, modal });

export default rootReducer;
