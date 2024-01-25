import prisma from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";

/**
 * Creates a new user in the database based on the provided sign-up form data.
 *
 * @param {Prisma.UserCreateInput} user - The sign-up form data for the new user.
 * @returns {Promise<User>} - A promise that resolves to the created user.
 */
export default async function createUser(
  user: Prisma.UserCreateInput
): Promise<User> {
  // Use Prisma's user.create method to create a new user in the database
  const createdUser = await prisma.user.create({ data: user });

  return createdUser;
}