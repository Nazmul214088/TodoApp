import z from "zod";

export const signUpScheme = z.object({
  name: z.string().trim().nonempty("Name is required."),
  email: z.string().trim().nonempty("Email is required."),
  phone: z
    .string()
    .nonempty("Phone number is required.")
    .min(11, "Phone number contain 11 digits.")
    .max(11, "Phone number contain 11 digits.")
    .regex(/^01[0-9]+/, "Phone number must start with 01"),
});
