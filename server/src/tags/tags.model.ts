// tags.model.ts
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Post } from '../post/posts.model';
import { PostTags } from '../post/post-tags.model';

interface TagsAttributes {
    name: string;
}

@Table({ tableName: 'tags' })
export class Tags extends Model<Tags, TagsAttributes> {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, unique: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    name: string;

    @BelongsToMany(() => Post, () => PostTags) // Добавляем связь многие-ко-многим
    posts: Post[];
}