import z from "zod"

export const ArticleSchema = z.object({
  title: z.string()
    .min(1, "Title required")
    .max(100, "Maximum length of title 100 characters"),
  content: z.string().min(1, "Content required")
})