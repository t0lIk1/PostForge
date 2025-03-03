import { CreateUserDto } from "./dto/users.dto";
import { User } from "./users.model";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: typeof User, rolesService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
