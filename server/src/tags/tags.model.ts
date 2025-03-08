import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TagsAttribute {
    name: string;
}

@Table({tableName: "tags"})
export class Tags extends Model<Tags,TagsAttribute> {
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true})
    declare id: number;
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;
}