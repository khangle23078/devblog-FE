import { Category } from "./category";

export interface Post {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: Category;
}
