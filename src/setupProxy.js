import proxy from "http-proxy-middleware";

const app = (app) => {
  app.use(
    proxy("/api", {
      target: "http://localhost:3002/",
    })
  );
};
