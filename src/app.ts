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

// define a GET route for health check
/**
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Get health status of the application
 *   tags: [Health]
 *   responses:
 *    200:
 *     description: The application's status, uptime, the current timestamp, and version
 */
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// export app and server for testing
export default app;
