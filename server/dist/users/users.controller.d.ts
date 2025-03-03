import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(dto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): Promise<import("./users.model").User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    banUser(dto: BanUserDto): Promise<import("./users.model").User>;
}
