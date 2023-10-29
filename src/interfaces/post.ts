import {Category} from "./category";
import {Thumbnail} from "./thumbnail";

export interface Post {
  _id: string;
  title: string;
  content: string;
  thumbnail: Thumbnail;
  category: Category[];
}
