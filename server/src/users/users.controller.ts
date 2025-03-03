import {Body, Controller, Get, Param, Post, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/users.dto";
import {RolesGuard} from "../auth/auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }

    @Get()
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    getAll() {
        return this.userService.getAllUsers();
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban")
    banUser(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}
