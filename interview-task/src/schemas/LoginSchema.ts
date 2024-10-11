import z from "zod"

export const LoginSchema = z.object({
  username: z.string()
    .min(8, "Username must be at least 8 characters.")
    .max(20, "Username must be less than 20 characters."),
  password: z.string()
    .min(3, "Password must be at least 3 characters.")
    .max(20, "Password must be less than 20 characters.")
})