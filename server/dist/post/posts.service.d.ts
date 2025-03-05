import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: typeof Post);
    createPost(dto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findByTitle(title: string): Promise<Post | null>;
    deletePost(id: string): Promise<number>;
    updatePost(id: string, dto: CreatePostDto): Promise<Post>;
}
