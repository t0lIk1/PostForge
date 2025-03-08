import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './post/posts.module';
import { TagsModule } from './tags/tags.module';
import { CategoryModule } from './category/category.module';
import {Post} from "./post/posts.model";
import {Role} from "./roles/roles.model";
import {User} from "./users/users.model";
import {UserRoles} from "./roles/user-roles.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Role, User, UserRoles, Post],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        TagsModule,
        CategoryModule,
    ],
})
export class AppModule {}