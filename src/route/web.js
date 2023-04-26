import express from "express";
import HomeController from "../controller/HomeController";
import { route } from "express/lib/router";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/about", (req, res) => {
    res.send("I'm Hiếu ");
  });
  router.get("/detail/user/:userId", HomeController.getDetailPage);
  router.post("/create-new-user", HomeController.createNewUser);

  return app.use("/", router);
};

export default initWebRoute;
