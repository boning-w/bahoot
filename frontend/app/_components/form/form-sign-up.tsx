"use client";

import ButtonAuth from "../button/button-auth";
import InputAuth from "../input/input-auth";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "../alert/alert";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(6, {
    message: "At least 6 characters, without any spaces",
  }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

/**
 * Component - Form - Sign Up
 *
 * This component represents a sign-up form. It includes input fields for email
 * and password, along with a "Sign Up" button.
 *
 */
export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <form
      autoComplete="on"
      className="w-full sm:max-w-sm flex flex-col px-6 py-12 gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-mono font-bold mx-auto">Sign Up</h1>
      <div className="flex flex-col gap-2">
        <InputAuth
          type="email"
          id="email"
          label="Email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          {...register("email")}
          error={errors.email}
        />
        {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
        <InputAuth
          type="password"
          id="password"
          label="Password"
          required
          autoComplete="current-password"
          {...register("password")}
          error={errors.password}
        />
        {errors.password && (
          <Alert severity="error">{errors.password.message}</Alert>
        )}
      </div>
      <ButtonAuth label="Sign Up" />
    </form>
  );
}
