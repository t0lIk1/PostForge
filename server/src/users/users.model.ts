import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {UserRoles} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    })
    declare id: number;
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    email: string;
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @Column({type: DataType.STRING, allowNull: true})
    bannedReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
