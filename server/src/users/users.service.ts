import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";

import {User} from "./users.model";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue("ADMIN")
        if (!role) {
            throw new HttpException("Role is null", 400)
        }


        await user.$set("roles", [role.dataValues.id])
        user.dataValues.roles = [role]
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async findByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}});
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.rolesService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException("User or role not found", 401)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(Number(dto.userId));

        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        console.log('Before save:', user.banned, user.bannedReason); // Логируем состояние до сохранения

        user.banned = true;
        user.bannedReason = dto.banReason;

        await user.save();
        console.log('After save:', user.banned, user.bannedReason); // Логируем состояние после сохранения

        // Проверяем, что пользователь действительно обновлен в базе данных
        const updatedUser = await this.userRepository.findByPk(Number(dto.userId));
        console.log('Updated user from DB:', updatedUser);

        return user;
    }
}
