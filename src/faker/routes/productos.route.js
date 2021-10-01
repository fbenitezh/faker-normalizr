import { Router } from "express";
import ProductoController from "../controllers/productos.controller.js";

class ProductosRoute extends Router {
  constructor(props) {
    super(props);
    this.productoController = new ProductoController();

    this.get("/productos-test", this.productoController.listarUsuarios);
  }
}

export default ProductosRoute;
