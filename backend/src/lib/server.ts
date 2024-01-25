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
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication operations
 * paths:
 *   /api/auth/signup:
 *     post:
 *       summary: Register a new user
 *       tags: [Auth]
 *       description: |
 *         Register a new user by providing email, name, and password.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user (should be unique).
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                 password:
 *                   type: string
 *                   description: The user's password (should meet security requirements).
 *             example:
 *               email: your@email.com
 *               name: your name
 *               password: your password
 *       responses:
 *         '201':
 *           description: User successfully registered.
 *           content:
 *             application/json:
 *               example:
 *                 message: User successfully registered.
 *                 user:
 *                   email: your@email.com
 *                   name: your name
 *                   password: your password
 *         '400':
 *           description: Bad request. Invalid or missing parameters.
 *           content:
 *             application/json:
 *               example:
 *                 error: Bad request. Invalid or missing parameters.
 *         '409':
 *           description: Conflict. User with the provided email already exists.
 *           content:
 *             application/json:
 *               example:
 *                 error: Conflict. User with the provided email already exists.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server.
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal Server Error. Something went wrong on the server.
 */
// Endpoint to register a new user
app.use("/api/auth", authRouter);
app.use(errorHandler);

export default app;
