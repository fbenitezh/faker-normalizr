import express from "express";
import path from "path";
import handlebars from "express-handlebars";
import session from "express-session";
import dotenv from "dotenv";
import AuthRoute from "./routes/auth.route.js";
import ProductosRoute from "./routes/productos.route.js";
import ViewRoute from './routes/view.route.js';
const productosRoute = new ProductosRoute();
const authRoute = new AuthRoute();
const viewRoute = new ViewRoute();
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine(
  ".hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir:path.resolve() + '/src/faker/views/layouts'
  })
);
app.set('views',path.resolve() + '/src/faker/views');
app.set("view engine", ".hbs");
app.use(express.static(path.resolve() + "/src/faker/views"));

app.use("/",viewRoute);
app.use("/api",productosRoute);
app.use("/auth",authRoute);


app.listen(port,()=>{
  console.log(`Server on port ${port}`);
})
