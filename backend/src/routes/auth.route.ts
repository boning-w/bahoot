import { API_POST_AUTH_SIGNUP } from "@/constants";
import signup from "@/controllers/auth/signup";
import validate from "@/middlewares/validate";
import { FormSignUpSchema } from "@/models/auth.model";
import { Router } from "express";

const router = Router();

/**
 * POST /api/auth/signup
 * @tags AUTH - Authentication operations
 * @summary Register a new user by providing email, name, and password.
 * @param {FormSignUpSchema} request.body.required - signup form - application/json
 * @return {object} 201 - User successfully registered - application/json
 * @example request - 201 payload
 * {
 * "email": "test@test.com",
 * "name": "test",
 * "password": "testtest"
 * }
 * @example response - 201 - success
 * {
 * "message": "User successfully registered.",
 * "token": "123"
 * }
 * @return {object} 400 - Bad request. - application/json
 * @example request - 400 Invalid form
 * {}
 * @example response - 400 - Invalid form
 * {
 * "message": "Invalid or missing input provided for: emial, name, password"
 * }
 * @example response - 400 - User exists
 * {
 * "message": "A user already exists with that email"
 * }
 */
router.post(API_POST_AUTH_SIGNUP, validate(FormSignUpSchema), signup);

export default router;
