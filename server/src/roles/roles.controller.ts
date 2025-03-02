import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/roles.dto";

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {
    }

    @Post()
    createRole(@Body() dto: CreateRoleDto) {
        return this.rolesService.create(dto)
    }

    @Get("/:value")
    getRole(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value)
    }

}
