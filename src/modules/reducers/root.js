import { combineReducers } from "redux";
import loading from "./loading";
import SignUpCheck from "./SignUp/SignUpCheck";
const rootReducer = combineReducers({ loading, SignUpCheck });

export default rootReducer;
