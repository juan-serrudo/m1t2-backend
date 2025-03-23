import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configurations/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SizesController } from './modules/sizes/sizes.controller';
import { SizesService } from './modules/sizes/sizes.service';
import { databaseProviders } from './providers/database.providers';
import { sizesProviders } from './providers/sizes.providers';

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
    SizesController,
  ],
  providers: [
    AppService,
    SizesService,
    ...databaseProviders,
    ...sizesProviders,
  ],
  exports: [
    ...databaseProviders
  ],
})

export class AppModule {}
