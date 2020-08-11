import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import SignUp from "./SignUp";
import Search from "./Search";
import Write from "./Write";
import Me from "./Me";
import Detail from "./Detail";
import Profile from "./Profile";
import Support from "./Support";

const rootReducer = combineReducers({
  loading,
  SignUp,
  modal,
  Search,
  Me,
  Write,
  Detail,
  Profile,
  Support,
});

export default rootReducer;
