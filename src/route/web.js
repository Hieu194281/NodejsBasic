import express from "express";
import HomeController from "../controller/HomeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/about", (req, res) => {
    res.send("I'm Hiếu ");
  });

  return app.use("/", router);
};

export default initWebRoute;
