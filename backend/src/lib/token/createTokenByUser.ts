import getJWTSecret from "@/lib/token/getJWTSecret";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

/**
 * Generates a JWT token for a user with the provided user data.
 *
 * @param {User} user - The user data to include in the token.
 * @returns {string} - The generated JWT token.
 */
export default function createTokenByUser(user: User): string {
  // Create a JWT token with user data and set an expiration time of 15 minutes
  const token = jwt.sign(user, getJWTSecret(), {
    expiresIn: "15m",
  });

  // Return the generated token
  return token;
}
