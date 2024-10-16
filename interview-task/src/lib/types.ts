import z from "zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { ChangePasswordSchema } from "@/schemas/ChangePasswordSchema";
import { ArticleSchema } from "@/schemas/ArticleSchema";
import { CommentSchema } from "@/schemas/CommentSchema";

export type LoginType = z.infer<typeof LoginSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;
export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;
export type ArticleInput = z.infer<typeof ArticleSchema>;
export type CommentType = z.infer<typeof CommentSchema>;

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

export type Comment = {
  id: number;
  author: Author;
  content: string;
  created: string;
  updated: string;
  article: number;
  parent: number | null;
  children: Comment[];
}