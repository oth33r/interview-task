import z from "zod"

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const ArticleSchema = z.object({
  title: z.string()
    .min(1, "Title required")
    .max(100, "Maximum length of title 100 characters"),
  content: z.string().min(1, "Content required"),
  image: z
    .any()
    .refine((file) => file[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
})