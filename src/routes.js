import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return req.json();
});

export default routes;
