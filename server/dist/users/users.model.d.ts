import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
interface UserCreationAttributes {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    bannedReason: string;
    roles: Role[];
}
export {};
