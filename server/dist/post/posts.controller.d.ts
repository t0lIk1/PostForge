import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    create(dto: CreatePostDto, req: any): Promise<import("./posts.model").Post>;
    getAll(): Promise<import("./posts.model").Post[]>;
    getByTitle(title: string): Promise<import("./posts.model").Post | null>;
    delete(id: string): Promise<number>;
    update(id: string, dto: CreatePostDto): Promise<import("./posts.model").Post>;
}
