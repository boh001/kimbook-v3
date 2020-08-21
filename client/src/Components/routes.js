import Home from "Pages/Home/Home";
import Me from "Pages/Me/Me";
import Detail from "Pages/Detail/Detail";
import Profile from "Pages/Profile/Profile";
import Support from "Pages/Support/Support";
import Find from "Pages/Find/Find";

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
  path: "/profile/:id",
  exact: true,
  component: Profile,
};
const SUPPORT = {
  path: "/me/support",
  component: Support,
};
const FIND = {
  path: "/find",
  component: Find,
};

const routes = [HOME, ME, DETAIL, PROFILE, SUPPORT, FIND];

export default routes;
