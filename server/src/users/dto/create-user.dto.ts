import {IsString, Length, IsEmail} from "class-validator";

export class CreateUserDto {
    @IsString({message: "This is string"})
    @IsEmail({}, {message: "uncorrected email"})
    readonly email: string;
    @IsString({message: "This is string"})
    @Length(4, 16, {message: "min length 4 and max length 16"})
    readonly password: string;
}
