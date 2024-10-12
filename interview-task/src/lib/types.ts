import z from "zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { ChangePasswordSchema } from "@/schemas/ChangePasswordSchema";

export type LoginType = z.infer<typeof LoginSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;
export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;

export type AuthType = LoginType | RegisterType;

export type Author = {
  id: number;
  username: string;
  email: string;
}

export type Article = {
  id: number;
  author: Author;
  content: string;
  image: string | null;
  slug: string;
  title: string;
  created: string;
  updated: string;
}