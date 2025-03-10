import { TagsService } from "./tags.service";
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(name: string): Promise<import("./tags.model").Tags>;
    getAll(): Promise<import("./tags.model").Tags[]>;
}
