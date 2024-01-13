import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.1.0",
    info: {
      version: "0.0.0",
      title: "Bahoot CRUD Server",
      description: "Server that powers the Bahoot frontend",
    },
  },
  apis: ["./src/*.ts"], // files containing annotations as above
};

const app = express();
const port = 4000;

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Only for testing backend is running
 * /test:
 *   get:
 *     summary: Test if backend is running
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Successful response with plain text content "Test!"
 *         content:
 *           text/plain:
 *             example: Test!
 */
app.get("/test", (_req: Request, res: Response) => {
  res.send("Test!");
});

const server = app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});

export default server;
