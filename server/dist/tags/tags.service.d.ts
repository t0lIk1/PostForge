import { Tags } from "./tags.model";
export declare class TagsService {
    private tagsRepository;
    constructor(tagsRepository: typeof Tags);
    createTag(name: string): Promise<Tags>;
    getAllTags(): Promise<Tags[]>;
}
