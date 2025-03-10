import { Tags } from "./tags.model";
export declare class TagsService {
    private tagsRepository;
    constructor(tagsRepository: typeof Tags);
    findAllTags(): Promise<Tags[]>;
    createTag(name: string): Promise<Tags>;
}
