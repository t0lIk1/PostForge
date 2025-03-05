export class CreatePostDto {
    readonly title: string;
    readonly status: string;
    readonly description: string;
    readonly img: string;
    userId: number;
}