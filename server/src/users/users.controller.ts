import {Body, Controller, Get, Param, Post, UseGuards, UsePipes} from "@nestjs/common";
import {UsersService} from "./users.service";
import {RolesGuard} from "../auth/auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";
import {ValidationPipe} from "../pipes/validation.pipes";

@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
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
