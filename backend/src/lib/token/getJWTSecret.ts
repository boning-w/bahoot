import "dotenv/config";

/**
 * Retrieves the JWT secret from the environment variables.
 * Throws an error if the JWT_SECRET is missing.
 *
 * @returns {string} - The JWT secret.
 * @throws {Error} - If JWT_SECRET is missing in the environment.
 */
export default function getJWTSecret(): string {
  // Retrieve JWT_SECRET from environment variables
  const JWT_SECRET = process.env.JWT_SECRET;

  // Check if JWT_SECRET is defined
  if (!JWT_SECRET) {
    // Throw an error if JWT_SECRET is missing
    throw new Error("JWT_SECRET missing in environment.");
  }

  // Return the JWT_SECRET
  return JWT_SECRET;
}
