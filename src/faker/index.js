import express from "express";
import ProductosRoute from "./routes/productos.route.js";
const productosRoute = new ProductosRoute();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use("/api",productosRoute);

app.listen(port,()=>{
  console.log(`Server on port ${port}`);
})
