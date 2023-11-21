import { Category } from "./category";

export interface Post {
  _id: string;
  title: string;
  content: string;
  description?: string,
  thumbnail: string;
  category: Category;
}
