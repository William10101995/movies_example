//Import Express
import express from "express";
//Import Config
import config from "./config/config";
//Import MiddleWare
import * as middleware from "./Middlewares/middlewares";
//Import Routes
import moviesRoutes from "./routes/routes";
//Import Database
import * as db from "./config/database.connection";

//Metodh Express
const app = express();

//Settings
app.set("port", config.PORT);

//Database Connection
db.default.connections();

//MiddleWares
app.use(middleware.getMorgan);
app.use(middleware.serverConnection);
app.use(middleware.json);
app.use(middleware.url);

//Routers
app.use(moviesRoutes);

export default app;