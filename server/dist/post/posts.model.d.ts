import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface PostCreationAttributes {
    title: string;
    status: string;
    description: string;
    img: string;
}
export declare class Post extends Model<Post, PostCreationAttributes> {
    id: number;
    status: string;
    title: string;
    description: string;
    img: string;
    userId: number;
    user: User;
}
export {};
