import {forwardRef, Module} from "@nestjs/common";
import {PostsController} from "./posts.controller";
import {PostsService} from "./posts.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [SequelizeModule.forFeature([Post]),
        forwardRef(() => AuthModule)],
    controllers: [PostsController],
    providers: [PostsService],
    exports: [],
})

export class PostsModule {
}
