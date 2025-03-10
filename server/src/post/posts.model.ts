// posts.model.ts
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Tags } from '../tags/tags.model';
import { PostTags } from './post-tags.model';

interface PostCreationAttributes {
    title: string;
    status: string;
    description: string;
    img: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttributes> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    status: string;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @Column({ type: DataType.STRING, allowNull: true })
    img: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Tags, () => PostTags) // Добавляем связь многие-ко-многим
    tags: Tags[];
}