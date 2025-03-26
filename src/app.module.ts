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
    SizesController,
    TypesArticlesController,
  ],
  providers: [
    AppService,
    SecurityService,
    UsersService,
    ArticlesService,
    SizesService,
    TypesArticlesService,
    ...databaseProviders,
    ...usersProviders,
    ...articlesProviders,
    ...sizesProviders,
    ...typesArticlesProviders,
  ],
  exports: [
    ...databaseProviders,
    ...usersProviders,
    ...articlesProviders,
    ...sizesProviders,
    ...typesArticlesProviders,
  ],
})

export class AppModule {}
