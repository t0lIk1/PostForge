"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
const tags_model_1 = require("../tags/tags.model");
let PostsService = class PostsService {
    postRepository;
    tagsRepository;
    constructor(postRepository, tagsRepository) {
        this.postRepository = postRepository;
        this.tagsRepository = tagsRepository;
    }
    async createPost(dto) {
        const post = await this.postRepository.create(dto);
        if (dto.tags) {
            const tags = await this.tagsRepository.findAll({
                where: { id: dto.tags },
            });
            await post.$set('tags', tags);
        }
        return post;
    }
    async findAll() {
        return await this.postRepository.findAll({ include: { all: true } });
    }
    async findByTitle(title) {
        return await this.postRepository.findOne({ where: { title }, include: { all: true } });
    }
    async deletePost(id) {
        return await this.postRepository.destroy({ where: { id } });
    }
    async updatePost(id, dto) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            throw new Error('Post not found');
        }
        post.set({
            title: dto.title,
            status: dto.status,
            description: dto.description,
            img: dto.img,
            userId: dto.userId,
        });
        await post.save();
        if (dto.tags) {
            const tags = await this.tagsRepository.findAll({
                where: { id: dto.tags },
            });
            await post.$set('tags', tags);
        }
        return await this.postRepository.findOne({
            where: { id },
            include: { all: true },
        });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(posts_model_1.Post)),
    __param(1, (0, sequelize_1.InjectModel)(tags_model_1.Tags)),
    __metadata("design:paramtypes", [Object, Object])
], PostsService);
//# sourceMappingURL=posts.service.js.map