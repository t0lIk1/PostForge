import { Model } from 'sequelize-typescript';
import { Post } from '../post/posts.model';
interface TagsAttributes {
    name: string;
}
export declare class Tags extends Model<Tags, TagsAttributes> {
    id: number;
    name: string;
    posts: Post[];
}
export {};
