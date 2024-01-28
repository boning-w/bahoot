import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "@/configs/app.config";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { FormSignUpSchema } from "@/models/auth.model";
import getJWTSecret from "@/lib/token/getJWTSecret";
import { API_POST_AUTH_SIGNUP } from "@/constants";

describe(`[POST] ${API_POST_AUTH_SIGNUP}`, () => {
  const newUser: FormSignUpSchema = {
    email: "test@test.com",
    name: "test",
    password: "testtest",
  };

  it("should respond with a `201` status code, a successful message and a token", async () => {
    const { body, status } = await request(app)
      .post(API_POST_AUTH_SIGNUP)
      .send(newUser);

    const user = await prisma.user.findFirst();

    expect(status).toBe(201);
    expect(user).not.toBeNull();
    expect(body.message).toBe("User successfully registered.");
    expect(body).toHaveProperty("token");
  });

  it("should respond with a valid session token when successful", async () => {
    const { body } = await request(app)
      .post(API_POST_AUTH_SIGNUP)
      .send(newUser);
    expect(body).toHaveProperty("token");
    expect(jwt.verify(body.token, getJWTSecret()));
  });

  it("should respond with a `400` status code if a user exists with the provided username", async () => {
    await prisma.user.create({
      data: newUser,
    });

    const { status, body } = await request(app)
      .post(API_POST_AUTH_SIGNUP)
      .send(newUser);

    const count = await prisma.user.count();

    expect(count).toBe(1);
    expect(status).toBe(400);
    expect(body.message).toBe("A user already exists with that email");
  });

  it("should respond with a `400` status code if an invalid request body is provided", async () => {
    const { body, status } = await request(app)
      .post(API_POST_AUTH_SIGNUP)
      .send({
        email: "", // error email format
        name: "", // error user name format
        // missing password
      });

    expect(status).toBe(400);
    expect(body.message).toBe(
      "Invalid or missing inputs provided for: email, name, password",
    );
  });
});
