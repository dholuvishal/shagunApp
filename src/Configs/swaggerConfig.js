require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const BACKEND_URL = process.env.APP_BASE_URL || "http://localhost:5000";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shagun API",
      version: "1.0.0",
      description: "API documentation for the Shagun App",
    },
    servers: [{ url: BACKEND_URL }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/swaggerDoc/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
