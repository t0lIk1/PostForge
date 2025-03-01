import {Injectable} from "@nestjs/common";
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({include: {all: true}});
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({where: {email}, include: {all: true}});
  }
}
