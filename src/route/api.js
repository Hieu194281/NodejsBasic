import express from "express";
import ApiController from "../controller/ApiController";

let router = express.Router();

const initApiRoute = (app) => {
  router.get("/users", ApiController.getAllUser);
  router.get("/users/:id", ApiController.getUserbyId);

  router.post("/create-user", ApiController.createNewUser);
  router.put("/update-user", ApiController.updateUser);
  router.delete("/delele-user/:id", ApiController.deleteUser);

  return app.use("/api/v1", router);
};

export default initApiRoute;
