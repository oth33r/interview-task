import z from "zod"

export const CommentSchema = z.object({
  content: z.string().min(1, "Comment required"),
  parent: z.number()
    .positive()
    .nullable()
    .optional()
    .or(z.literal(null))
})