import express from 'express'
import * as exprhbs from "express-handlebars";

const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src/public"));
app.use(routes);

app.engine("handlebars", exprhbs.engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

export default app;
