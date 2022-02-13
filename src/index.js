import express from "express";
import * as exprhbs from "express-handlebars";
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const handlebars = require("handlebars");
const app = express();
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src/public"));
app.use(routes);

app.engine(
    "handlebars",
    exprhbs.engine({
        defaultLayout: "main",
        handlebars: allowInsecurePrototypeAccess(handlebars),
        layoutsDir: __dirname + "/views/layouts/",
    })
);
app.set("view engine", "handlebars");
app.set("views", "src/views");

export default app;
