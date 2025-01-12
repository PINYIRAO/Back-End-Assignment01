// import the express application and type definition
import express, { Express } from "express";

// import setupSwagger endpoint
import setupSwagger from "../config/swagger";

// initialize the express application
const app: Express = express();

// setup swagger for api documentation
setupSwagger(app);

// respond to GET request at endpoint "/" with message
/**
 * @openapi
 * /:
 *   get:
 *     summary: get a greet message
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: a greet message from application
 */
app.get("/", (req, res) => {
  res.send("Hello, welcome to Back-End world!");
});

// export app and server for testing
export default app;
