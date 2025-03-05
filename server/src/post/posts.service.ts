import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
    ) {}

    async createPost(dto: CreatePostDto) {
        return await this.postRepository.create(dto);
    }

    async findAll() {
        return await this.postRepository.findAll();
    }

    async findByTitle(title: string) {
        return await this.postRepository.findOne({ where: { title }, include: { all: true } });
    }

    async deletePost(id: string) {
        return await this.postRepository.destroy({where: {id}})
    }

    async updatePost(id: string, dto: CreatePostDto) {
        const post = await this.postRepository.findOne({where: {id}})
        post!.set({...dto})
        return await post!.save();
    }
}