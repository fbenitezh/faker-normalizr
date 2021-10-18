import express from "express";
import path from "path";
import handlebars from "express-handlebars";
import session from "express-session";
import MongoSession from "connect-mongodb-session";
dotenv.config();
import dotenv from "dotenv";
import AuthRoute from "./routes/auth.route.js";
import ProductosRoute from "./routes/productos.route.js";
import ViewRoute from "./routes/view.route.js";
import {cacheControl} from './middlewares/cacheControl.js';
const productosRoute = new ProductosRoute();
const authRoute = new AuthRoute();
const viewRoute = new ViewRoute();
const app = express();
const port = process.env.PORT || 8080;
const { MONGODB_URI, SECRET_SESSION, NODE_ENV } = process.env;
const MongoStore = MongoSession(session);
const store = new MongoStore({
  uri: MONGODB_URI,
  collection: "sessions", // o como quieran llamar a la colección
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cacheControl);
app.engine(
  ".hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve() + "/src/faker/views/layouts",
  })
);
app.set("views", path.resolve() + "/src/faker/views");
app.set("view engine", ".hbs");
app.use(express.static(path.resolve() + "/src/faker/views"));

//sessions
app.use(
  session({
    store,
    resave: true,
    saveUninitialized: true,
    secret: SECRET_SESSION,
    cookie: {
      maxAge: 10 * 1000,
      sameSite: NODE_ENV == "production" ? "strict" : "lax",
    },
    rolling: true,
  })
);

app.use("/", viewRoute);
app.use("/api", productosRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
