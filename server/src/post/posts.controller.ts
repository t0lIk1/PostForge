import {Body, Controller, Get, Param, Post, UseGuards, Request, Delete, Put} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/auth.guard";

@Controller('post')
export class PostsController {
    constructor(private readonly postService: PostsService) {
    }

    @Post("/create")
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    create(@Body() dto: CreatePostDto, @Request() req) {
        dto.userId = req.user.id;
        return this.postService.createPost(dto);
    }

    @Get()
    getAll() {
        return this.postService.findAll()
    }

    @Get("/:title")
    getByTitle(@Param('title') title: string) {
        return this.postService.findByTitle(title)
    }

    @Delete("/delete/:id")
    delete(@Param('id') id: string) {
        return this.postService.deletePost(id)
    }

    @Put("/update/:id")
    update(@Param('id') id: string, @Body() dto: CreatePostDto) {
       return this.postService.updatePost(id, dto)
    }
}
