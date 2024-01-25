import getJWTSecret from "@/lib/token/getJWTSecret";
import { beforeEach, describe, expect, it } from "vitest";

describe("getJWTSecret", () => {
  beforeEach(() => {
    delete process.env.JWT_SECRET;
  });

  // Test case for a valid JWT_SECRET
  it("returns the JWT_SECRET if it is defined", () => {
    process.env.JWT_SECRET = "your-secret-key";
    const result = getJWTSecret();
    expect(result).toBe("your-secret-key");
  });

  // Test case for missing JWT_SECRET
  it("throws an error if JWT_SECRET is missing", () => {
    expect(() => getJWTSecret()).toThrowError(
      "JWT_SECRET missing in environment."
    );
  });
});
