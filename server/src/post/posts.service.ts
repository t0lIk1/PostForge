// posts.service.ts
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Post} from './posts.model';
import {CreatePostDto} from './dto/create-post.dto';
import {Tags} from '../tags/tags.model';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
        @InjectModel(Tags) private tagsRepository: typeof Tags,
    ) {
    }

    async createPost(dto: CreatePostDto) {
        const post = await this.postRepository.create(dto);

        if (dto.tags) {
            const tags = await this.tagsRepository.findAll({
                where: {id: dto.tags}, // Предположим, что dto.tags — это массив ID тегов
            });
            await post.$set('tags', tags); // Добавляем теги к посту
        }

        return post;
    }

    async findAll() {
        return await this.postRepository.findAll({include: {all: true}});
    }

    async findByTitle(title: string) {
        return await this.postRepository.findOne({where: {title}, include: {all: true}});
    }

    async deletePost(id: string) {
        return await this.postRepository.destroy({where: {id}});
    }

    async updatePost(id: string, dto: CreatePostDto) {
        // Находим пост по ID
        const post = await this.postRepository.findOne({ where: { id } });

        if (!post) {
            throw new Error('Post not found');
        }

        // Обновляем основные поля поста
        post.set({
            title: dto.title,
            status: dto.status,
            description: dto.description,
            img: dto.img,
            userId: dto.userId,
        });

        // Сохраняем обновленные поля поста
        await post.save();

        // Если в DTO переданы теги, обновляем их
        if (dto.tags) {
            // Находим все теги по их ID
            const tags = await this.tagsRepository.findAll({
                where: { id: dto.tags },
            });

            // Устанавливаем новые теги для поста
            await post.$set('tags', tags);
        }

        // Возвращаем обновленный пост с тегами
        return await this.postRepository.findOne({
            where: { id },
            include: { all: true }, // Включаем связанные теги
        });
    }
}