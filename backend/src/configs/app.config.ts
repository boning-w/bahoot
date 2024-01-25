import { SWAGGER_CONFIG } from "@/configs/swagger.config";
import { API_DOCS } from "@/constants";
import errorHandler from "@/middlewares/errorHandler";
import authRouter from "@/routes/auth.route";
import testRouter from "@/routes/test.route";
import express from "express";
import swaggerUi from "swagger-ui-express";

const app = express();
// app.use(cors());
app.use(express.json());
app.use(API_DOCS, swaggerUi.serve, swaggerUi.setup(SWAGGER_CONFIG));
app.use(testRouter);
app.use(authRouter);
app.use(errorHandler);

export default app;
