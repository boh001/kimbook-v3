import Home from "Pages/Home/Home";
import Me from "Pages/Me/Me";
import Search from "Pages/Search/Search";
import Detail from "Pages/Detail/Detail";
import Profile from "Pages/Profile/Profile";

const HOME = {
  path: "/",
  exact: true,
  component: Home,
};
const ME = {
  path: "/me",
  exact: true,
  component: Me,
};
const DETAIL = {
  path: "/detail/:id",
  exact: true,
  component: Detail,
};
const PROFILE = {
  path: "/me/profile/:id",
  exact: true,
  component: Profile,
};
const SERACH = {
  path: "/search",
  component: Search,
};

const routes = [HOME, ME, DETAIL, PROFILE, SERACH];

export default routes;
