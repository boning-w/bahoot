import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function resetdb() {
  await prisma.$transaction([prisma.user.deleteMany()]);
}
