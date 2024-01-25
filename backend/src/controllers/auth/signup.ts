import { NextFunction, Request, Response } from "express";
import { FormSignUpSchema } from "@/models/auth.model";
import { AppError } from "@/models/error.model";
import findUserByEmail from "@/services/auth/findUserByEmail";
import createUser from "@/services/auth/createUser";
import createTokenByUser from "@/lib/token/createTokenByUser";

/**
 * Handles user registration.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next function.
 */
export default async function signup(
  req: Request<unknown, unknown, FormSignUpSchema>,
  res: Response,
  next: NextFunction
) {
  const formSignUp = req.body;

  // If a user with the provided email already exists, return a 409 Bad Request Response
  if (await findUserByEmail(formSignUp.email)) {
    return next(
      new AppError("validation", "A user already exists with that email")
    );
  }

  // Create a new user with the provided email
  const newUser = await createUser(formSignUp);

  // Create a new token for the new user
  const token = createTokenByUser(newUser);

  // Send success response
  res.status(201).json({ message: "User successfully registered.", token });
}
