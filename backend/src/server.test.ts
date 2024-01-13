import { describe, afterEach, it, vi, expect } from "vitest";
import Request from "supertest";
import server from "./server";

describe("/test route", () => {
  it('should return 200 with "Test!"', async () => {
    const response = await Request(server).get("/test");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Test!");
  });
});
