import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(dto: CreateUserDto): Promise<import("./users.model").User | import("@nestjs/common").HttpException>;
    getAll(): Promise<import("./users.model").User[]>;
}
