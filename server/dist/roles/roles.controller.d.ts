import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/roles.dto";
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    createRole(dto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getRole(value: string): Promise<import("./roles.model").Role | null>;
}
