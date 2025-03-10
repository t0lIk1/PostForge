import { Model } from 'sequelize-typescript';
export declare class PostTags extends Model<PostTags> {
    id: number;
    postId: number;
    tagId: number;
}
