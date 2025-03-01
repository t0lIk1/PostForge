import { User } from "./users.model";
import { CreateUserDto } from "./dto/users.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
}
