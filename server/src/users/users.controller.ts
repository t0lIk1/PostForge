import {Body, Controller, Get, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/users.dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
