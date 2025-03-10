import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tags} from "./tags.model";
import {Post} from "../post/posts.model";
import {PostTags} from "../post/post-tags.model";

@Module({
  imports: [SequelizeModule.forFeature([Tags, PostTags, Post])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
