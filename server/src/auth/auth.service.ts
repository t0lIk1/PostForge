import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/users.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        console.log(user)
        return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.findByEmail(userDto.email);
        if (candidate) {
            throw new HttpException(
                "A user with that name already exists",
                HttpStatus.BAD_REQUEST,
            );
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.usersService.createUser({
            ...userDto,
            password: hashedPassword,
        });
        return await this.generateToken(user as User)
    }

    async generateToken(user: User) {
        console.log(user)
        const payload = {
            email: user.dataValues.email,
            id: user.id,
            roles: user.dataValues.roles,
        };
        return {
            token: this.jwtService.sign(payload),
        };
    }

    private async validateUser(userDto: CreateUserDto): Promise<User> {
        const user = await this.usersService.findByEmail(userDto.email);
        if (!user) {
            throw new UnauthorizedException({message: "Invalid email or password"});
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.dataValues.password);
        if (!passwordEquals) {
            throw new UnauthorizedException({message: "Invalid email or password"});
        }
        return user;
    }
}