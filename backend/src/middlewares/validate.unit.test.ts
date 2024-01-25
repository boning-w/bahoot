import validate from "@/middlewares/validate";
import { AppError } from "@/models/error.model";
import { Request } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";

describe("validate", () => {
  let request: Request;
  const next = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
    request = {} as Request;
  });

  it("should call next with AppError if validation fails", async () => {
    request.body = {};
    const schema = z.object({
      body: z.object({
        username: z.string(),
        password: z.string(),
      }),
    });

    await validate(schema)(request, {} as any, next);

    expect(next).toHaveBeenCalled();
    expect(next.mock.calls[0][0]).toBeInstanceOf(AppError);
    expect(next.mock.calls[0][0].message).toBe(
      "Invalid or missing inputs provided for: username, password"
    );
  });

  it("should succeed with a valid request", async () => {
    request.body = { username: "testusername" };
    const schema = z.object({
      body: z.object({
        username: z.string(),
      }),
    });

    await validate(schema)(request, {} as any, next);
    expect(next).toHaveBeenCalledWith();
  });
});
