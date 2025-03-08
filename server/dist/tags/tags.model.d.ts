import { Model } from "sequelize-typescript";
interface TagsAttribute {
    name: string;
}
export declare class Tags extends Model<Tags, TagsAttribute> {
    id: number;
    name: string;
}
export {};
