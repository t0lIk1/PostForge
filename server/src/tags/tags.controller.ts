import {Body, Controller, Get, Post} from '@nestjs/common';
import {TagsService} from "./tags.service";

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) {
    }


    @Post()
    create(@Body('name') name: string) {
        return this.tagsService.createTag(name)
    }

    @Get()
    getAll() {
        return this.tagsService.getAllTags()
    }
}
