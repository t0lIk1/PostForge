import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import {Tags} from "../tags/tags.model";
import {Post} from "./posts.model";

@Table({ tableName: 'post_tags', createdAt: false, updatedAt: false })
export class PostTags extends Model<PostTags> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Post)
    @Column({ type: DataType.INTEGER })
    postId: number;

    @ForeignKey(() => Tags)
    @Column({ type: DataType.INTEGER })
    tagId: number;
}