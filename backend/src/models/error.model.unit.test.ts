import { AppError } from "@/models/error.model";
import { describe, expect, it } from "vitest";

describe("AppError", () => {
  it("should create an instance with default status code (400)", () => {
    const error = new AppError("validation", "Validation error");

    expect(error).toBeInstanceOf(AppError);
    expect(error.status).toBe(400);
    expect(error.message).toBe("Validation error");
  });

  it("should create an instance with specified status code", () => {
    const error = new AppError("unauthorized", "Unauthorized");

    expect(error).toBeInstanceOf(AppError);
    expect(error.status).toBe(401);
    expect(error.message).toBe("Unauthorized");
  });

  it("should set the correct name and stack trace", () => {
    const error = new AppError("server", "Server error");

    expect(error).toBeInstanceOf(AppError);
    expect(error.name).toBe("Error");
    expect(error.stack).toContain("AppError");
  });
});
