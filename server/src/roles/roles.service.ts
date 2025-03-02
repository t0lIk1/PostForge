import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./dto/roles.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async create(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({where: {value}});
    }

}
