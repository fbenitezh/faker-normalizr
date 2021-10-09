import { Router } from "express";
import ViewController from "../controllers/view.controller.js";

class ViewRoute  extends Router {
  constructor(props) {
    super(props);
    this.viewController = new ViewController();

    this.get("/login", this.viewController.renderLogin);
    this.get("/logout", this.viewController.renderLogout);
    this.get("/", this.viewController.root);
  }
}

export default ViewRoute;
