import Home from "Routes/Home";
import Me from "Routes/Me";

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
const PROFILE = {
  path: "/me/profile/:id",
  exact: true,
  component: "",
};

const routes = [HOME, ME, PROFILE];

export default routes;
