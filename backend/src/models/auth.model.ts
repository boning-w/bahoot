import { z } from "zod";

export const EmailSchema = z.string().trim().email();
export type EmailSchema = z.infer<typeof EmailSchema>;

export const NameSchema = z
  .string()
  .trim()
  .min(1, { message: "Name should have at least 1 character." });
export type NameSchema = z.infer<typeof NameSchema>;

export const PasswordSchema = z
  .string()
  .min(6, { message: "Password should have at least 6 characters." })
  .refine((value) => !/\s/.test(value), {
    message: "Password should not contain white spaces.",
  });
export type PasswordSchema = z.infer<typeof PasswordSchema>;

export const FormSignUpSchema = z
  .object({
    body: z.object({
      email: EmailSchema,
      name: NameSchema,
      password: PasswordSchema,
    }),
  })
  .required();
export type FormSignUpSchema = z.infer<typeof FormSignUpSchema>["body"];
