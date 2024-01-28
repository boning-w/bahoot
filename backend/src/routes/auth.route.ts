import { API_POST_AUTH_SIGNUP } from "@/constants";
import signup from "@/controllers/auth/signup";
import validate from "@/middlewares/validate";
import { FormSignUpSchema } from "@/models/auth.model";
import { Router } from "express";

const router = Router();

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
router.post(API_POST_AUTH_SIGNUP, validate(FormSignUpSchema), signup);

export default router;
