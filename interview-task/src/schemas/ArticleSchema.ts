import z from "zod"

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const ArticleSchema = z.object({
  title: z.string()
    .min(1, "Title required")
    .max(100, "Maximum length of title 100 characters"),
  content: z.string().min(1, "Content required"),
  image: z.any().optional()
    .refine(file => file.length == 1 ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type) ? true : false : true, 'Invalid file. choose either JPEG or PNG image')
    .refine(file => file.length == 1 ? file[0]?.size <= MAX_FILE_SIZE ? true : false : true, 'Max file size allowed is 8MB.')
})