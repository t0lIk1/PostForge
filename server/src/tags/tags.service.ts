import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Model} from "sequelize-typescript";
import {Tags} from "./tags.model";

@Injectable()
export class TagsService {

    constructor(@InjectModel(Tags) private tagsRepository: typeof Tags) {
    }


    async findAllTags() {
        return await this.tagsRepository.findAll();
    }

    async createTag(name: string) {
        return await this.tagsRepository.create({name});
    }
}
