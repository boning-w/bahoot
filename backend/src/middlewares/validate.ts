import { AppError } from "@/models/error.model";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

/**
 * Middleware to validate request data against a Zod schema.
 * @param {AnyZodObject} schema - The Zod schema to validate against.
 */
export default function validate(schema: AnyZodObject) {
  return async function (
    req: Request<unknown>,
    _res: Response,
    next: NextFunction
  ) {
    try {
      // Parse and validate request data against the provided schema
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // If validation passes, proceed to the next middleware
      return next();
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        // Extract invalid fields from Zod error
        const invalids = error.issues.map((issue) => issue.path.pop());

        // Create and pass a validation error to the next middleware
        next(
          new AppError(
            "validation",
            `Invalid or missing input${
              invalids.length > 1 ? "s" : ""
            } provided for: ${invalids.join(", ")}`
          )
        );
      } else {
        // Handle generic validation errors
        next(new AppError("validation", "Invalid input"));
      }
    }
  };
}
