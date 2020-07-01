import Home from "Routes/Home";

const HOME = {
  path: "/",
  exact: true,
  component: Home,
};
const MAIN = {
  path: "/main",
  exact: true,
  component: "",
};
const PROFILE = {
  path: "/main/detail/:id",
  exact: true,
  component: "",
};

const routes = [HOME, MAIN, PROFILE];

export default routes;
