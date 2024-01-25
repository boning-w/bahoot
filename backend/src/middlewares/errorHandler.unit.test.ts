import errorHandler from "@/middlewares/errorHandler";
import { AppError } from "@/models/error.model";
import { Response } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("errorHandler", () => {
  let responseMock: Response;

  beforeEach(() => {
    vi.restoreAllMocks();
    responseMock = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
  });

  it("should handle AppError with speciic status status and message", () => {
    const error = new AppError("validation", "validation error");

    errorHandler(error, {} as any, responseMock, {} as any);
    // Ensure the response status and JSON methods are called correctly
    expect(responseMock.status).toHaveBeenCalledWith(error.status);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: error.message,
    });
  });

  it("should handle generic Error with 500 status and generic message", () => {
    const error = new Error();
    errorHandler(error, {} as any, responseMock as Response, {} as any);
    // Ensure the response status and JSON methods are called correctly
    expect(responseMock.status).toHaveBeenCalledWith(500);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: "Oops! Something went wrong...",
    });
  });
});
