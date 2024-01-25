import signup from "@/controllers/auth/signup";
import createTokenByUser from "@/lib/token/createTokenByUser";
import { AppError } from "@/models/error.model";
import createUser from "@/services/auth/createUser";
import findUserByEmail from "@/services/auth/findUserByEmail";
import { User } from "@prisma/client";
import { Request, Response } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/auth/findUserByEmail");
vi.mock("@/services/auth/createUser");
vi.mock("@/lib/token/createTokenByUser");

describe("signup", () => {
  let reqMock: Request;
  let resMock: Response;
  const nextMock = vi.fn();
  const formSignUpMock = {
    email: "test@test.com",
    name: "test",
    password: "test",
  };
  const userMock = {
    ...formSignUpMock,
    id: 1,
  } as User;

  beforeEach(() => {
    vi.restoreAllMocks();
    reqMock = { body: formSignUpMock } as Request;
    resMock = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
  });

  it("should handle existing user", async () => {
    vi.mocked(findUserByEmail).mockResolvedValue(userMock);

    await signup(reqMock, resMock, nextMock);

    expect(findUserByEmail).toBeCalledWith(formSignUpMock.email);
    expect(nextMock).toBeCalled();
    expect(nextMock.mock.calls[0][0]).toBeInstanceOf(AppError);
    expect((nextMock.mock.calls[0][0] as AppError).message).toBe(
      "A user already exists with that email"
    );
    expect((nextMock.mock.calls[0][0] as AppError).status).toBe(400);
  });

  it("should handle successful sign up", async () => {
    vi.mocked(findUserByEmail).mockResolvedValue(null);
    vi.mocked(createUser).mockResolvedValue(userMock);
    vi.mocked(createTokenByUser).mockReturnValue("test-token");

    await signup(reqMock, resMock, nextMock);

    expect(createUser).toBeCalledWith(formSignUpMock);
    expect(createTokenByUser).toBeCalledWith(userMock);
    expect(resMock.status).toHaveBeenCalledWith(201);
    expect(resMock.json).toHaveBeenCalledWith({
      message: "User successfully registered.",
      token: "test-token",
    });
  });
});
