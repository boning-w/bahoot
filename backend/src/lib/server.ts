import { API_DOCS, API_TEST } from "@/constants";
import errorHandler from "@/middlewares/errorHandler";
import authRouter from "@/routes/auth.route";
import express, { Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
// app.use(cors());
app.use(express.json());

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
  apis: ["./src/**/*.ts"], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);
app.use(API_DOCS, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
app.get(API_TEST, (_req: Request, res: Response) => {
  res.send("Test!");
});
app.use(authRouter);
app.use(errorHandler);

export default app;
