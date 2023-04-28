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
  router.post("/delete-user/:userId", HomeController.DeleteUser);
  router.get("/edit-user/:userId", HomeController.editUser);
  router.post("/update-user", HomeController.updateUser);

  router.get("/upload", HomeController.getUploadFilePage);
  router.post("/upload-profile-pic", HomeController.handleUploadFile);
  router.post("/upload-multiple-images", HomeController.handleUploadFile);

  return app.use("/", router);
};

export default initWebRoute;
