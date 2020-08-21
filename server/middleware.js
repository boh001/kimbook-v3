import routes from "./routes";

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.HOME);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.HOME);
  }
};
