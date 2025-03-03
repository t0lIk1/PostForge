import {Body, Controller, Get, Post, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/users.dto";
import {RolesGuard} from "../auth/auth.guard";
import {Roles} from "../auth/roles-auth.decorator";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

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
}
