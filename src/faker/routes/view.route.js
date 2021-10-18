import { Router } from "express";
import ViewController from "../controllers/view.controller.js";
import {verifySession} from '../middlewares/verifySession.js';

class ViewRoute  extends Router {
  constructor(props) {
    super(props);
    this.viewController = new ViewController();

    this.get("/login", this.viewController.renderLogin);
    this.get("/logout", verifySession,this.viewController.renderLogout);
    this.get("/", verifySession, this.viewController.index);
  }
}

export default ViewRoute;
