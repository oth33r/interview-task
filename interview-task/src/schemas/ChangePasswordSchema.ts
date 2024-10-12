import z from "zod"

export const ChangePasswordSchema = z.object({
  oldPassword: z.string()
    .min(3, "Password must be at least 3 characters.")
    .max(20, "Password must be less than 20 characters."),
  password: z.string()
    .min(3, "Password must be at least 3 characters.")
    .max(20, "Password must be less than 20 characters."),
  confirmedPassword: z.string()
    .min(3, "Password must be at least 3 characters.")
    .max(20, "Password must be less than 20 characters.")
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmedPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Password and confirmed password differ`,
      path: ['confirmedPassword']
    })
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: '',
      path: ['password']
    })
  }
})