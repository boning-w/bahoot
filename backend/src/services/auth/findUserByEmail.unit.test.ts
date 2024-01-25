import prismaMock from "@/lib/__mocks__/prisma";
import findUserByEmail from "@/services/auth/findUserByEmail";
import { User } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma");

describe("findUserByEmail", () => {
  it("should return user for a existing email", async () => {
    const existingEmail = "your@email.com";
    const userMock: User = {
      id: 1,
      email: existingEmail,
      name: "John Doe",
      password: "hashedPassword",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.user.findUnique.mockResolvedValue(userMock);
    const result = await findUserByEmail(existingEmail);
    expect(result).toEqual(userMock);
  });

  it("should return null for an non-existing email", async () => {
    const noExistingEmail = "invalid-email";
    prismaMock.user.findUnique.mockResolvedValue(null);
    const result = await findUserByEmail(noExistingEmail);
    expect(result).toBeNull();
  });

  it("should handle errors during database query and throw an error", async () => {
    prismaMock.user.findUnique.mockRejectedValue(new Error("Database error"));
    await expect(findUserByEmail("test@example.com")).rejects.toThrowError();
  });
});
