import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Tags} from "./tags.model";

@Injectable()
export class TagsService {

    constructor(@InjectModel(Tags) private tagsRepository: typeof Tags) {
    }

    async createTag(name: string ) {
        return await this.tagsRepository.create({name});
    }

    async getAllTags() {
        return await this.tagsRepository.findAll()
    }
}
