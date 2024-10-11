import z from "zod"

export const RegisterSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  username: z.string()
    .min(8, "Username must be at least 8 characters.")
    .max(20, "Username must be less than 20 characters."),
  password: z.string()
    .min(3, "Password must be at least 3 characters.")
    .max(20, "Password must be less than 20 characters.")
})