import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

/**
 * Find a user from the database based on their email.
 *
 * @param {string} email - The email address of the user.
 * @returns {Promise<User | null>} - A Promise that resolves to the user if found, or null if not found.
 */
export default async function findUserByEmail(
  email: string
): Promise<User | null> {
  // Use Prisma to find a unique user based on the provided email
  const user = await prisma.user.findUnique({ where: { email } });

  // Return the user if found, or null if not found
  return user;
}
