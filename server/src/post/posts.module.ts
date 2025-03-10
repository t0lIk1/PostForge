import {forwardRef, Module} from "@nestjs/common";
import {PostsController} from "./posts.controller";
import {PostsService} from "./posts.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {AuthModule} from "../auth/auth.module";
import {Tags} from "../tags/tags.model";
import {PostTags} from "./post-tags.model";

@Module({
    imports: [SequelizeModule.forFeature([Post, Tags, PostTags]),
        forwardRef(() => AuthModule)],
    controllers: [PostsController],
    providers: [PostsService],
    exports: [],
})

export class PostsModule {
}
