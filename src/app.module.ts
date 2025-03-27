import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configurations/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SizesController } from './modules/sizes/sizes.controller';
import { SizesService } from './modules/sizes/sizes.service';
import { databaseProviders } from './providers/database.providers';
import { sizesProviders } from './providers/sizes.providers';
import { typesArticlesProviders } from './providers/types-articles.providers';
import { TypesArticlesService } from './modules/types-articles/types-articles.service';
import { TypesArticlesController } from './modules/types-articles/types-articles.controller';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { usersProviders } from './providers/users.providers';
import { SecurityController } from './modules/security/security.controller';
import { SecurityService } from './modules/security/security.service';
import { ArticlesController } from './modules/articles/articles.controller';
import { ArticlesService } from './modules/articles/articles.service';
import { articlesProviders } from './providers/articles.providers';
import { articlesSizeProviders } from './providers/articles-sizes.providers';
import { ArticlesSizesController } from './modules/articles-sizes/articles-sizes.controller';
import { ArticlesSizesService } from './modules/articles-sizes/articles-sizes.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
  ],
  controllers: [
    AppController,
    SecurityController,
    UsersController,
    ArticlesController,
    ArticlesSizesController,
    SizesController,
    TypesArticlesController,
  ],
  providers: [
    AppService,
    SecurityService,
    UsersService,
    ArticlesService,
    ArticlesSizesService,
    SizesService,
    TypesArticlesService,
    ...databaseProviders,
    ...usersProviders,
    ...articlesProviders,
    ...articlesSizeProviders,
    ...sizesProviders,
    ...typesArticlesProviders,
  ],
  exports: [
    ...databaseProviders,
    ...usersProviders,
    ...articlesProviders,
    ...articlesSizeProviders,
    ...sizesProviders,
    ...typesArticlesProviders,
  ],
})

export class AppModule {}
