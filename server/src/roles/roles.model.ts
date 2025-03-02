import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttributes {
    value: string;
    description: string;
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    })
    declare id: number;
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    value: string;
    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}