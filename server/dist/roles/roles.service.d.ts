import { CreateRoleDto } from "./dto/roles.dto";
import { Role } from "./roles.model";
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    create(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role | null>;
}
