import { AppError } from "@/models/error.model";
import { Request, Response, NextFunction } from "express";

/**
 * Express middleware to handle errors and send appropriate responses.
 *
 * @param {Error} error - The error object to be handled.
 * @param {Request} _ - The request object.
 * @param {Response} response - The response object.
 * @param {NextFunction} _next - The next function.
 */
export default function errorHandler(
  error: Error,
  _: Request,
  response: Response,
  _next: NextFunction
) {
  // Determine the HTTP status code based on the error type
  const status = "status" in error ? (error as AppError).status : 500;

  // Send a JSON response with the appropriate status code and error message
  response.status(status).json({
    // Use the error message from AppError if available, otherwise provide a generic message
    message:
      error instanceof AppError
        ? error.message
        : "Oops! Something went wrong...",
  });
}
