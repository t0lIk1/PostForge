import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';
import { Tags } from '../tags/tags.model';
export declare class PostsService {
    private postRepository;
    private tagsRepository;
    constructor(postRepository: typeof Post, tagsRepository: typeof Tags);
    createPost(dto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findByTitle(title: string): Promise<Post | null>;
    deletePost(id: string): Promise<number>;
    updatePost(id: string, dto: CreatePostDto): Promise<Post | null>;
}
