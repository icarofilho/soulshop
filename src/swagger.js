const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./src/swagger_output.json";
const endPointsFiles = ["src/routes/index.js"];

const doc = {
    swagger: "3.0",
    info: {
        version: "1.0.0",
        title: "Soul Shop API",
        description: "API de compras",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json", "application/xml"],
    produces: ["application/json"],
    
    tags: [
        {
            name: "valePresente",
            description: "EndPoint",
        },
        {
            name: "Produtos",
            description: "EndPoint para contas financeiras",
        },
    ],
};

swaggerAutogen(outputFile, endPointsFiles, doc);
