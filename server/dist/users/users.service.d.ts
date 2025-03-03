import { CreateUserDto } from "./dto/users.dto";
import { User } from "./users.model";
import { RolesService } from "../roles/roles.service";
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: typeof User, rolesService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
}
