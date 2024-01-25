import bcrypt from "bcrypt";

/**
 * Compares a plaintext password with its hashed counterpart using bcrypt.
 *
 * @param {string} password - The plaintext password to be compared.
 * @param {string} hash - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise resolving to a boolean indicating if the passwords match.
 */
export default function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
