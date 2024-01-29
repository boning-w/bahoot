import errorHandler from "@/middlewares/errorHandler";
import authRouter from "@/routes/auth.route";
import testRouter from "@/routes/test.route";
import express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import SWAGGER_CONFIG from "./swagger.config";

const app = express();
expressJSDocSwagger(app)(SWAGGER_CONFIG);
// app.use(cors());
app.use(express.json());
app.use(testRouter);
app.use(authRouter);
app.use(errorHandler);

export default app;
