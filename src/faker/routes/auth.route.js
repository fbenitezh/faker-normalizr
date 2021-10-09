import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

class AuthRoute  extends Router {
  constructor(props) {
    super(props);
    this.authController = new AuthController();

    this.post("/login", this.authController.login);
    this.post("/logout", this.authController.logout);
  }
}

export default AuthRoute;
