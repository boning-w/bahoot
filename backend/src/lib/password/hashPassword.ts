import { SALT_ROUNDS } from "@/constants";
import bcrypt from "bcrypt";

/**
 * Hashes the given password using bcrypt.
 *
 * @param {string} password - The password to be hashed.
 * @returns {Promise<string>} - A promise resolving to the hashed password.
 */
export default function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}
