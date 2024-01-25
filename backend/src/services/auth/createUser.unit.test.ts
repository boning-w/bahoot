import prismaMock from "@/lib/__mocks__/prisma";
import hashPassword from "@/lib/password/hashPassword";
import { FormSignUpSchema } from "@/models/auth.model";
import createUser from "@/services/auth/createUser";
import { User } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma");
vi.mock("@/lib/password/hashPassword");

describe("createUser", () => {
  it("should create a new user successfully", async () => {
    const formSignUp: FormSignUpSchema = {
      email: "test@example.com",
      name: "Test User",
      password: "password123",
    };
    const userMock: User = {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...formSignUp,
    };

    prismaMock.user.create.mockResolvedValue(userMock);
    const createdUser = await createUser(formSignUp);
    expect(createdUser).toEqual(userMock);
    expect(hashPassword).toBeCalledTimes(1);
  });

  it("should handle error - Unique constraint failed on the fields: (`email`)", async () => {
    const existingEmail: FormSignUpSchema = {
      email: "test@example.com",
      name: "Test User",
      password: "password123",
    };

    prismaMock.user.create.mockRejectedValue(
      new Error("Unique constraint failed on the fields: (`email`)")
    );
    await expect(createUser(existingEmail)).rejects.toThrowError();
  });
});
